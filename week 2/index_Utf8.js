/**--------------------------
 * ASCII to UTF-8 conversion
 * --------------------------
 */
//declare function for conversion
function asciiToUtf8(ascii) {
    //create a TextEncoder instance
    //TextEncoder converts JavaScript strings to UTF-8 encoded bytes
    return new TextEncoder('utf-8').encode(ascii);
    //alternately buffer can be used instead of TextEncoder
    // return Buffer.from(asciiString, 'utf8');
}
//Ascii string 
const asciiString = "How are you?"
console.log("original ascii string is " + asciiString);

//Convert Ascii string to UTF-8 byte array
const utf8Byte = asciiToUtf8(asciiString);
console.log("utf-8 encoded bytes is " + utf8Byte);