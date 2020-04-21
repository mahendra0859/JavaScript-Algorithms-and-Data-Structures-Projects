/** Find the longest word in given string */
const longestWordFunc = (str) => {
    const words = str.split(" ");
    let longestWord = "";
    for (let word of words) {
        if (word.length >= longestWord.length)
            longestWord = word;
    }
    return longestWord;
};
console.log(longestWordFunc(" Lorem ipsum dolor sit amet consectetur, adipisicing elit."));
console.log(longestWordFunc("Dignissimos eum voluptates minima dolorem, quaerat, enim voluptate quidem quam, ipsa vero nemo id veritatis consectetur odio sed labore. "));
console.log(longestWordFunc("Sequi quasi doloribus inventore? At nostrum laborum odit nihil animi ratione quo quod placeat quis voluptatem, id quasi."));
