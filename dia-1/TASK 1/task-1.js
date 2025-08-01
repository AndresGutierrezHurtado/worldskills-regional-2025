function isPalindrome(text) {
    if (typeof text !== "string") return "El texto debe ser un string";
    if (text === "") return "El texto no debe estar vacio";

    const word = text.replaceAll(" ", "");
    const reversedWord = word.split("").reverse().join("");

    if (word === reversedWord) return `La palabra ${text} es un palíndromo`;
    if (word !== reversedWord) return `La palabra ${text} NO es un palíndromo`;
}

console.log(isPalindrome("ana"));
console.log(isPalindrome("ejemplo"));
console.log(isPalindrome("oso"));
console.log(isPalindrome(""));
console.log(isPalindrome("arañara"));
console.log(isPalindrome("ejemplo con espacios soicapse noc olpmeje"));
console.log(isPalindrome("intento fallido"));
console.log(isPalindrome(4));
