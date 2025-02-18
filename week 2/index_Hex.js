/**------------------------
 * Array to Hex conversion
 * ------------------------
 */
//declare a function for the conversion
function arrayToHex(array) {
    return Array.from(array).map(a => a.toString(16).padStart(2, '0')).join('');
        //padStart() method pads a string from the start
        //It pads the string with another string (multiple times) until it reaches a given length.
        //String padding is to extend a string to a given length with a given fill character.
        //here 0 is the fill character, 2 represents the length required. 
        //join() method returns an array as a string.
}
//Unsigned Integer Octet Array
const arr = new Uint8Array([72, 101, 108, 108, 111]); //"Hello"

//Call the conversion function to get the hex representation of "HELLO"
const hexString = arrayToHex(arr);
//Output the result to console. 
console.log(hexString); // Output - "48656c6c6f"