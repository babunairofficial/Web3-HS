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
