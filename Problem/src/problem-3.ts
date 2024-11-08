{
  function countWordOccurrences(sentence: string, word: string): number {
    const wordsLowerCaser = sentence.toLowerCase();
    const wordLower = word.toLowerCase();
    const words = wordsLowerCaser.split(" ");
    // console.log(words);
    return words.filter((w) => w === wordLower).length;
  }

  console.log(
    countWordOccurrences("TypeScript is great. I love TypeScript", "Typescript")
  );
}
