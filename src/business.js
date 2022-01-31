export function Entry(journalInput) {
  this.journalInput = journalInput;
}

Entry.prototype.wordCounter = function () {
  let wordCount = 0;
  const wordArray = this.journalInput.split(" ");
  wordCount = wordArray.length;
  return wordCount;
};
