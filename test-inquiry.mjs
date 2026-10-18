import assert from 'node:assert/strict';
import handler from './api/inquiry.js';
const payload={name:'Test',phone:'+420777123456',vehicle:'Test vehicle',description:'TEST',service:'',date:'',website:''};
async function call(body=payload,headers={},method='POST') {
 const res={code:0,data:null,setHeader(){},status(c){this.code=c;return this},json(d){this.data=d;return this}};
 await handler({method,headers:{origin:'https://programenvusxenos.com','content-type':'application/json',...headers},body},res);return res;
}
assert.equal((await call(payload,{},'GET')).code,405);
assert.equal((await call(payload,{origin:'https://other.invalid'})).code,403);
assert.equal((await call({...payload,name:''})).code,400);
assert.equal((await call({...payload,website:'spam'})).code,400);
assert.equal((await call({...payload,description:'x'.repeat(1501)})).code,400);
delete process.env.RESEND_API_KEY;
assert.equal((await call()).code,503);
process.env.RESEND_API_KEY='test-only';
let sent;
globalThis.fetch=async(url,options)=>{sent=JSON.parse(options.body);return {ok:true,json:async()=>({id:'mock'})}};
assert.equal((await call()).code,200);
assert.deepEqual(sent.to,['programenvus@gmail.com']);
assert.equal(sent.from,'PGEX Autoservis <poptavky@programenvusxenos.com>');
globalThis.fetch=async()=>({ok:false,status:403,json:async()=>({})});
assert.equal((await call()).code,502);
globalThis.fetch=async()=>{throw Error('timeout')};
assert.equal((await call()).code,502);
console.log('10 checks passed; no real email sent.');
