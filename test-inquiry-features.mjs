import assert from "node:assert/strict";
import sharp from "sharp";
import handler from "./api/inquiry.js";
import { MAX_PHOTO_BYTES, MAX_REQUEST_BYTES, validEmail } from "./shared/inquiry.js";

const saved = { fetch: globalThis.fetch, now: Date.now, key: process.env.RESEND_API_KEY, vercel: process.env.VERCEL };
const payload = { name: "Testovací zákazník", phone: "+420777123456", vehicle: "Škoda Octavia", description: "Kontrolka motoru", date: "2026-11-05", email: "customer+test@example.com", photos: [] };
const photo = await sharp({ create: { width: 100, height: 70, channels: 3, background: "#cda858" } }).jpeg().withExif({ IFD0: { Artist: "Private metadata" } }).toBuffer();
let requests, records, delivered, receiptMode, workshopMode;
function reset() {
 requests = []; records = new Map(); delivered = 0; receiptMode = "ok"; workshopMode = "ok";
 globalThis.fetch = async (url, options) => {
  assert.equal(url, "https://api.resend.com/emails");
  const body = JSON.parse(options.body);
  const receipt = options.headers["Idempotency-Key"].startsWith("inquiry-receipt-");
  requests.push({ body, key: options.headers["Idempotency-Key"], receipt });
  const mode = receipt ? receiptMode : workshopMode;
  if (mode === "timeout") throw new Error("timeout");
  if (mode === "failure") return { ok: false, status: 429, json: async () => ({ name: "rate_limit_exceeded" }) };
  if (mode === "empty") return { ok: true, status: 200, json: async () => null };
  const key = options.headers["Idempotency-Key"];
  if (records.has(key)) {
   const entry = records.get(key);
   if (entry.body !== options.body) return { ok: false, status: 409, json: async () => ({ name: "invalid_idempotent_request" }) };
   return { ok: true, status: 200, json: async () => ({ id: entry.id }) };
  }
  const id = `accepted-${++delivered}`;
  records.set(key, { body: options.body, id });
  return { ok: true, status: 200, json: async () => ({ id }) };
 };
}
async function call(body = payload, headers = {}) {
 const res = { headers: {}, setHeader(k,v) { this.headers[k] = v; }, status(code) { this.code = code; return this; }, json(data) { this.data = data; return this; } };
 await handler({ method: "POST", headers: { origin: "https://programenvusxenos.com", "content-type": "application/json", "x-vercel-forwarded-for": "203.0.113.11", ...headers }, body }, res);
 return res;
}
try {
 process.env.RESEND_API_KEY = "test-only";
 process.env.VERCEL = "1";
 Date.now = () => Date.UTC(2026, 9, 19, 12, 0, 10);
 reset();
 for (const email of ["name@host", "a@example.com,b@example.com", "Name <a@example.com>", "a@example.com\r\nBcc:b@example.com", ".a@example.com", "a..b@example.com", "a@-example.com", "a@exam_ple.com", "a".repeat(65) + "@example.com"]) {
  assert.equal(validEmail(email), false, email);
  assert.equal((await call({ ...payload, email })).code, 400, email);
 }
 assert.equal((await call({ ...payload, email: ["a@example.com"] })).code, 400);
 assert.equal((await call({ ...payload, date: "2026-02-30" })).code, 400);
 assert.equal((await call({ ...payload, photos: {} })).code, 400);
 assert.equal((await call({ ...payload, photos: Array(4).fill({ content: photo.toString("base64") }) })).code, 400);
 for (const content of ["not base64!", Buffer.from("<svg></svg>").toString("base64"), Buffer.from([255,216,255,0,1,2,3]).toString("base64"), Buffer.alloc(MAX_PHOTO_BYTES + 1).toString("base64")]) {
  assert.equal((await call({ ...payload, photos: [{ content }] })).code, 400);
 }
 const hugeDimensions = await sharp({ create: { width: 2500, height: 10, channels: 3, background: "white" } }).jpeg().toBuffer();
 assert.equal((await call({ ...payload, photos: [{ content: hugeDimensions.toString("base64") }] })).code, 400);
 assert.equal((await call(payload, { "content-length": String(MAX_REQUEST_BYTES + 1) })).code, 413);
 assert.equal((await call(" ".repeat(MAX_REQUEST_BYTES + 1))).code, 413);
 assert.equal((await call({ ...payload, extra: "ž".repeat(1_500_000) })).code, 413);
 assert.equal(requests.length, 0, "invalid input must never reach provider");
 const withPhotos = { ...payload, photos: [{ content: photo.toString("base64"), filename: "../../private.exe", path: "https://example.invalid/private" }] };
 const success = await call(withPhotos);
 assert.equal(success.code, 200);
 assert.equal(success.data.confirmation, "accepted");
 assert.equal(requests.length, 2);
 const business = requests[0].body;
 const receipt = requests[1].body;
 assert.deepEqual(business.to, ["programenvus@gmail.com"]);
 assert.equal(business.reply_to, payload.email);
 assert.equal(business.attachments[0].filename, "fotka-1.jpg");
 assert.equal(business.attachments[0].path, undefined);
 const metadata = await sharp(Buffer.from(business.attachments[0].content,"base64")).metadata();
 assert.equal(metadata.format,"jpeg");
 assert.equal(metadata.exif,undefined,"remove photo metadata");
 assert.deepEqual(receipt.to,[payload.email]);
 assert.equal(receipt.reply_to,"programenvus@gmail.com");
 assert.equal(receipt.attachments,undefined,"photos only go to workshop");
 assert.ok(receipt.text.includes("TOTO NENÍ POTVRZENÍ REZERVACE"));
 assert.ok(receipt.text.includes("Škoda Octavia"));
 assert.ok(receipt.text.includes("05. 11. 2026"));
 assert.ok(receipt.text.includes("Kontrolka motoru"));
 assert.equal((await call(withPhotos)).code,200);
 assert.equal(delivered,2,"retries do not send either copy twice within same window");
 assert.equal((await call({...withPhotos,email:"different@example.com"})).code,429);
 assert.equal(delivered,2,"cannot change the receipt recipient for an accepted slot");
 reset();
 assert.equal((await call({ ...payload, email:"",photos:[] })).data.confirmation,"not_requested");
 assert.equal(requests.length,1);
 assert.equal(requests[0].body.reply_to,"programenvus@gmail.com");
 assert.equal(requests[0].body.attachments,undefined);
 for(const mode of ["failure","timeout","empty"]){
  reset();receiptMode=mode;
  const result=await call(withPhotos);
  assert.equal(result.code,200);
  assert.equal(result.data.ok,true);
  assert.equal(result.data.confirmation,"unavailable");
  assert.equal(delivered,1,"receipt failure must preserve accepted workshop message");
  receiptMode="ok";
  assert.equal((await call(withPhotos)).data.confirmation,"accepted");
  assert.equal(delivered,2,"receipt retry must not duplicate workshop copy");
 }
 reset();workshopMode="failure";
 assert.equal((await call(withPhotos)).code,502);
 assert.equal(requests.length,1,"no receipt for rejected workshop delivery");
 console.log("Passed: optional email, validation, limits, image decoding/metadata, trusted filenames, separate receipt, replay and partial failures. No real emails sent.");
} finally {
 globalThis.fetch=saved.fetch;Date.now=saved.now;
 for(const [key,value] of [["RESEND_API_KEY",saved.key],["VERCEL",saved.vercel]]){if(value===undefined)delete process.env[key];else process.env[key]=value;}
}
