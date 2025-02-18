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

/**------------------------
 * Hex to Array conversion
 * ------------------------
 */
//declare a function for the converstion
function hexToArray(hexString) {
    //split the hex string into chunks of two characters (or one if at the end)
    //hexString.match(/.(1,2)/g) does the following:
        //1. Takes the input string (like "48656c6cf")
        //2. Breaks it into chunks of two characters: ["48", "65", "6c", "6c", "f"]

    return hexString.match(/.{1,2}/g).map(h => parseInt(h, 16));
    //for each chunk in the array, convert from hex (base 18) to decimal
    //"48" becomes 72, "65" becomes 101, etc. 
}
//Hex string
const hex = "48656c6cf"; //"Hello"

//call the coversion function to get the Unsigned Integer Octet Array representaiton of "Hello"
const hexToByteArray = hexToArray(hex);
//output the result to console.
console.log(hexToByteArray);