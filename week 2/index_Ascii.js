/**-------------------------- 
 * Bytes to Ascii conversion 
 * --------------------------
 */
//declare the function
function bytesToAscii(byteArray) {
    //map the individual number to the function
    //return the ascii character
    return byteArray.map(byte => String.fromCharCode(byte)).join('');
}

//array of bytes
const bytes = [66, 97, 98, 117, 32, 78, 97, 105, 114];
//declare a variable to store the resultant value of function called.
const asciiString = bytesToAscii(bytes);
//display the ascii characters
console.log(asciiString);

/**--------------------------
 * Ascii to Bytes conversion
 * --------------------------
 */
//function declare
function asciiToBytes(asciiString) {
    //split the characters of the string
    //map the individual characters to the function
    //return the unicode of the character
    return asciiString.split('').map(char => char.charCodeAt(0));
  }
  //ascii character
  const ascii = "Javascript";
  //declare a variable to store the resultant value of function called.
  const byteArray = asciiToBytes(ascii);
  //display the byte characters 
  console.log(byteArray);

/**-------------------------------
 * UInt8Array to Ascii conversion
 * -------------------------------
 */
//function declare
function uIntEightArrayToAscii(bytes) {
    //TextDecoder provides a more efficient conversion for TypedArrays
    return new TextDecoder().decode(bytes);
}
//Unsigned Integer Octet Array
const uIntOctetArray = new Uint8Array ([72, 101, 108, 108, 111]);
//declare a variable to store the resultant value of the function called.
const asciiString2 = uIntEightArrayToAscii(uIntOctetArray);
//log the ascii String
console.log(asciiString2);

/**-------------------------------
 * Ascii to UInt8Array conversion
 * -------------------------------
 */
//function declare
function asciiToUintOctetArray(asciiString) {
    return new Uint8Array(asciiString.split("").map((c) => c.charCodeAt(0)));
  }
  //ascii character
  const ascii2 = "Hello World";
  //declare a variable to store the resultant value of the function called.
  const uIntOctetArray2 = asciiToUintOctetArray(ascii2);
  //log the uInt8Array
  console.log(uIntOctetArray2);