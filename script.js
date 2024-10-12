function firstNonRepeatedChar(str) {
 // Write your code here
	let freq = new Array(26).fill(0);
    for (let c of str) {
        freq[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    for(let i=0;i<str.length;i++){
         if (freq[str[i].charCodeAt(0) - 'a'.charCodeAt(0)] == 1) {
            return str[i];
        }
    }
    return null;
	
	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
