/**
 * Uint8Array is a typed array 
 * It represents an array of 8-bit unsigned integers
*/
let bytes = new Uint8Array([0, 255, 127, 128]);
console.log(bytes);
//any value above 255 in 8bit system will be reassigned new value as per the order. for eg.
let bytes2 = new Uint8Array([0, 256, 300, 301]);
console.log(bytes2);
//output would be [0, 0, 44, 45]
//notice how after 255 the integers are reassinged the next value of 0 (zero) for 256.
//similary integers 300 and 301 have values 44 and 45 as per the 8-bit system