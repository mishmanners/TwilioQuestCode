function removeDuplicateCharacters(string) {

 // remove ALL duplicates: return string.split('').filter((item, index, inputArray) => inputArray.indexOf(item) === index).join('');

    return string.split('').filter((char, index, arr) => arr.indexOf(char) === index).join('');
}

console.log("Test case 1:");
console.log(removeDuplicateCharacters("aabbcc"));

console.log("Test case 2:");
console.log(removeDuplicateCharacters("asdfjkl;"));

console.log("Test case 3:");
console.log(removeDuplicateCharacters("abba"));

console.log("Test case 4:");
console.log(removeDuplicateCharacters("fffunnn"));