function shortestWord(sentence) {
    if (typeof sentence !== "string") return "El texto debe ser un string";
    if (sentence === "") return "El texto no debe estar vacio";

    const words = sentence.split(" ");

    const shortestLength = Math.min(...words.map((w) => w.length));
    const shortestWords = words.filter((w) => w.length === shortestLength);
    const shortestWordsMessage = shortestWords.join(", ");

    return `las palabras más cortas de la oración son las siguientes: ${shortestWordsMessage}`;
}

console.log(shortestWord("la palabras mas cortas de este parrafo"));
console.log(shortestWord(""));
console.log(shortestWord("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi dolore maiores sed fugit cupiditate sunt accusantium excepturi error enim molestias reprehenderit illum, deleniti nulla amet recusandae possimus vero. Aperiam officiis, quas ad earum enim consequuntur maiores inventore nemo dolorem nulla ullam debitis. Deserunt expedita saepe tempora cum nostrum aliquid blanditiis."));
console.log(shortestWord(5));
console.log(shortestWord("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi dolore maiores sed fugit cupiditate sunt accusantium excepturi error enim molestias reprehenderit illum, deleniti nulla amet recusandae possimus vero. Aperiam officiis, quas asd earum enim consequuntur maiores inventore nemo dolorem nulla ullam debitis. Deserunt expedita saepe tempora cum nostrum aliquid blanditiis."));
console.log(shortestWord("ejemplo con palabra super laaargas"));
