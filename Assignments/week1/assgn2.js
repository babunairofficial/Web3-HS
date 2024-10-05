//Input string should start with babu

const crypto = require('crypto');

function prefixedHash(prefix){
    let input = 0;
    while(true){
        let inputStr = "babu"+input.toString();
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if(hash.startsWith(prefix)){
            return {input:inputStr, hash:hash}
        }
        input++;
    }    
}
const result = prefixedHash('00000');
console.log(`Input = ${result.input}`);
console.log(`Hash = ${result.hash}`);