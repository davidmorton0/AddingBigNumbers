function add(a, b) {
  let carry1 = 0, string = "";
  for (let n = 1; n - carry1 <= Math.max(a.length, b.length); n++) {
    c = Number(a[a.length - n] || 0) + Number(b[b.length - n] || 0) + carry1;
    carry1 = Math.floor(c / 10);
    string = (c+'').slice(-1) + string;
  }
  return string;
}

var assert = require('assert');
assert.equal(add("1", "1"), "2");
assert.equal(add("123", "456"), "579");
assert.equal(add("888", "222"), "1110");
assert.equal(add("1372", "69"), "1441");
assert.equal(add("12", "456"), "468");
assert.equal(add("101", "100"), "201");
assert.equal(add('63829983432984289347293874',
                 '90938498237058927340892374089'),
                 "91002328220491911630239667963")
