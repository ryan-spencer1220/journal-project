export function Entry(journalInput) {
  this.journalInput = journalInput;
}

Entry.prototype.wordCounter = function () {
  let wordCount = 0;
  const wordArray = this.journalInput.split(" ");
  wordCount = wordArray.length;
  return wordCount;
};

Entry.prototype.vowelCounter = function () {
  let vowelCount = 0;
  let consonantCount = 0;
  const letterArray = this.journalInput.split("");
  letterArray.forEach(function (letter) {
    if (
      letter.toLowerCase() === "a" ||
      letter.toLowerCase() === "e" ||
      letter.toLowerCase() === "i" ||
      letter.toLowerCase() === "o" ||
      letter.toLowerCase() === "u"
    ) {
      vowelCount++;
    } else if (letter != " " && !Number(letter)) {
      consonantCount++;
    }
  });
  return [vowelCount, consonantCount];
};

Entry.prototype.getTeaser = function () {
  let wordArray = this.journalInput.split(" ");
  let returnString = "";
  for (let x = 0; x < 8; x++) {
    returnString += wordArray[x] + " ";
  }
  return returnString;
};
