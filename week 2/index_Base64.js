/**----------------
 * Base64 Encoding
 * ----------------
 */
//Unsigned Integer Octet Array
const uint8Array = new Uint8Array([72, 101, 108, 108, 111]);

//base64 encoding
const base64Encoded = Buffer.from(uint8Array).toString("base64");
//Buffer.from() method creates a new buffer filled with the specified string, array, or buffer.
//toString() returns a number as a string, with parameter as Base 64

//log the result
console.log(base64Encoded);