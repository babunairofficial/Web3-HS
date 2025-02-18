/**------------------------
 * Uint8Array to Base58 conversion
 * ------------------------
 */
// Base58 is a binary-to-text encoding used for representing large integers as alphanumeric text
//It's commonly used in cryptocurrency application like Bitcoin addresses. 

//import the bs58 library with .default to access the encode function
// The .default is necessary because:
    // 1. bs58 is using CommonJS module system (require/module.exports)
    // 2. Some versions of bs58 export their functions as a default export object
    // 3. Without .default, the library might return an object with a structure like { default: { encode, decode } }
    // 4. Adding .default ensures we get the actual object containing encode/decode methods
    // 5. This pattern is common when using libraries that were built with different module systems

const bs58 = require('bs58').default;

//Use the bs58 library's encode function to convert the byte array to Base58
function uint8ArrayToBase58(uint8Array) {
    return bs58.encode(uint8Array);
}

//Create a Uint8Array containing ASCII values for "Hello"
const byteArray = new Uint8Array([72, 101, 108, 108, 111]); //"Hello"

//Convert the Uint8Array to a Base58 encoded string
const base58String = uint8ArrayToBase58(byteArray);
//Log the result on the console.
console.log(base58String);