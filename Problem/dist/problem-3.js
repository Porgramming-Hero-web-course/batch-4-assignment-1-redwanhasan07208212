"use strict";
{
    function countWordOccurrences(sentence, word) {
        const wordsLowerCaser = sentence.toLowerCase();
        const words = wordsLowerCaser.split(" ");
        // console.log(words);
        return words.filter((w) => w === word).length;
    }
    console.log(countWordOccurrences("TypeScript is great. I love TypeScript", "typescript"));
}
