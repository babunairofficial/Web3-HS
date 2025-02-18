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

/*----------------- Utf8 to Ascii String conversion ----------------*/
//declare function for conversion
function utf8ToString(utf8Array) {
    // Create a TextDecoder instance with UTF-8 encoding
    // TextDecoder converts UTF-8 encoded bytes back to JavaScript strings
    const decoder = new TextDecoder('utf-8');
    
    // Decode the UTF-8 byte array to a string
    return decoder.decode(utf8Array);
}

// Convert UTF-8 byte array back to string
const decodedString = utf8ToString(utf8Byte);
console.log("Decoded string:", decodedString);
