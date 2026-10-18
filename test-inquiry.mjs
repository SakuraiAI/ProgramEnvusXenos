import assert from "node:assert/strict";
import handler from "./api/inquiry.js";

const payload = { name: "Test", phone: "+420777123456", vehicle: "Test vehicle", description: "TEST", service: "", date: "", website: "" };
const saved = { fetch: globalThis.fetch, now: Date.now, key: process.env.RESEND_API_KEY, alias: process.env.ProgramEnvusXenos, vercel: process.env.VERCEL };
let now = Date.UTC(2026, 9, 18, 12, 0, 10);
Date.now = () => now;
process.env.VERCEL = "1";
let requests = [];
let sentEmails = 0;
let records = new Map();
let release;
let hold = false;
function providerMock() {
 globalThis.fetch = async (url, options) => {
  assert.equal(url, "https://api.resend.com/emails");
  requests.push(options);
  const key = options.headers["Idempotency-Key"];
  assert.ok(key.length <= 256);
  const existing = records.get(key);
  if (existing?.pending) return { ok: false, status: 409, json: async () => ({ name: "concurrent_idempotent_requests" }) };
  if (existing && existing.body !== options.body) return { ok: false, status: 409, json: async () => ({ name: "invalid_idempotent_request" }) };
  if (existing) return { ok: true, status: 200, json: async () => ({ id: existing.id }) };
  records.set(key, { pending: true });
  if (hold) await new Promise(resolve => { release = resolve; });
  const id = `mock-${++sentEmails}`;
  records.set(key, { body: options.body, id });
  return { ok: true, status: 200, json: async () => ({ id }) };
 };
}
async function call(body = payload, headers = {}, method = "POST", run = handler) {
 const res = { code: 0, data: null, headers: {}, setHeader(k,v) { this.headers[k] = v; }, status(c) { this.code = c; return this; }, json(d) { this.data = d; return this; } };
 await run({ method, headers: { origin: "https://programenvusxenos.com", "content-type": "application/json", "x-vercel-forwarded-for": "203.0.113.7", ...headers }, socket: { remoteAddress: "127.0.0.1" }, body }, res);
 return res;
}
try {
 providerMock();
 assert.equal((await call(payload, {}, "GET")).code, 405);
 assert.equal((await call(payload, { origin: "https://other.invalid" })).code, 403);
 assert.equal((await call(payload, { "content-type": "text/plain" })).code, 415);
 assert.equal((await call("{invalid")).code, 400);
 assert.equal((await call({ ...payload, name: "" })).code, 400);
 assert.equal((await call({ ...payload, website: "spam" })).code, 400);
 assert.equal((await call({ ...payload, description: "x".repeat(1501) })).code, 400);
 assert.equal(requests.length, 0, "invalid requests must not reach Resend");
 delete process.env.RESEND_API_KEY;
 delete process.env.ProgramEnvusXenos;
 assert.equal((await call()).code, 503);
 process.env.RESEND_API_KEY = "test-only";
 const first = await call();
 assert.equal(first.code, 200);
 assert.equal(first.data.retryAfter, 50);
 assert.equal(first.headers["Cache-Control"], "no-store");
 const email = JSON.parse(requests[0].body);
 assert.deepEqual(email.to, ["programenvus@gmail.com"]);
 assert.equal(email.from, "PGEX Autoservis <poptavky@programenvusxenos.com>");
 assert.equal(sentEmails, 1);
 assert.equal((await call()).code, 200);
 assert.equal(sentEmails, 1, "same submission is replayed, not sent twice");
 const changed = { ...payload, description: "A different request" };
 const blocked = await call(changed);
 assert.equal(blocked.code, 429);
 assert.equal(blocked.headers["Retry-After"], "50");
 assert.equal(blocked.data.retryAfter, 50);
 assert.equal(sentEmails, 1);
 // A fresh module simulates another serverless instance, with no shared process state.
 const freshHandler = (await import("./api/inquiry.js?fresh-instance")).default;
 assert.equal((await call(changed, {}, "POST", freshHandler)).code, 429);
 assert.equal((await call(changed, { "x-forwarded-for": "198.51.100.2", "x-real-ip": "198.51.100.2" })).code, 429);
 assert.equal((await call(changed, { "x-vercel-forwarded-for": "203.0.113.8" })).code, 200);
 assert.equal(sentEmails, 2, "different visitors remain independent");
 assert.equal((await call(payload, { "x-vercel-forwarded-for": undefined })).code, 503);
 assert.equal((await call(payload, { "x-vercel-forwarded-for": "invalid" })).code, 503);
 assert.equal((await call(payload, { "x-vercel-forwarded-for": ["203.0.113.7"] })).code, 503);
 assert.equal((await call(payload, { "x-vercel-forwarded-for": "2001:db8::1" })).code, 200);
 assert.equal((await call(changed, { "x-vercel-forwarded-for": "2001:0db8:0:0:0:0:0:1" })).code, 429);
 assert.ok(!requests[0].headers["Idempotency-Key"].includes("203.0.113.7"), "do not expose raw IP in key");
 now += 49_999;
 assert.equal((await call(changed)).data.retryAfter, 1);
 now += 1;
 assert.equal((await call(changed)).code, 200, "new UTC minute allows a new message");
 // A timeout may hide provider acceptance; retry in the same window must not duplicate.
 records = new Map();
 providerMock();
 const acceptingFetch = globalThis.fetch;
 globalThis.fetch = async (...args) => { await acceptingFetch(...args); throw new Error("response lost"); };
 assert.equal((await call()).code, 502);
 const afterTimeout = sentEmails;
 globalThis.fetch = acceptingFetch;
 assert.equal((await call()).code, 200);
 assert.equal(sentEmails, afterTimeout);
 records = new Map();
 hold = true;
 const inFlight = call();
 assert.equal((await call()).code, 429);
 assert.equal((await call()).data.retryAfter, 3);
 release();
 assert.equal((await inFlight).code, 200);
 hold = false;
 process.env.ProgramEnvusXenos = "re_project_test_only";
 assert.equal((await call()).code, 200);
 assert.equal(requests.at(-1).headers.Authorization, "Bearer test-only");
 delete process.env.RESEND_API_KEY;
 assert.equal((await call()).code, 200);
 assert.equal(requests.at(-1).headers.Authorization, "Bearer re_project_test_only");
 process.env.ProgramEnvusXenos = "unrelated-value";
 assert.equal((await call()).code, 503);
 process.env.ProgramEnvusXenos = "  re_project_test_only  ";
 assert.equal((await call()).code, 200);
 assert.equal(requests.at(-1).headers.Authorization, "Bearer re_project_test_only");
 delete process.env.VERCEL;
 assert.equal((await call()).code, 200);
 assert.equal((await call(changed, { "x-vercel-forwarded-for": "198.51.100.2" })).code, 429, "local mode ignores untrusted forwarded headers");
 globalThis.fetch = async () => ({ ok: false, status: 403, json: async () => ({}) });
 assert.equal((await call()).code, 502);
 globalThis.fetch = async () => ({ ok: false, status: 409, json: async () => ({ name: "unknown_error" }) });
 assert.equal((await call()).code, 502);
 globalThis.fetch = async () => ({ ok: true, status: 200, json: async () => null });
 assert.equal((await call()).code, 502);
 globalThis.fetch = async () => { throw Error("timeout"); };
 assert.equal((await call()).code, 502);
 console.log("Passed: validation, throttling, replay, concurrent/fresh instances, IP trust, window expiry, lost response, key compatibility and delivery failures. No real emails sent.");
} finally {
 globalThis.fetch = saved.fetch;
 Date.now = saved.now;
 for (const [key, value] of [["RESEND_API_KEY", saved.key], ["ProgramEnvusXenos", saved.alias], ["VERCEL", saved.vercel]]) {
  if (value === undefined) delete process.env[key]; else process.env[key] = value;
 }
}
