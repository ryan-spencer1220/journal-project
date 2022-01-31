Describe : Entry()

Test: "It will construct an object"
Code:
let journalEntry = "String"
let myEntry = new Entry(journalEntry)
myEntry;
Expected outcome: Entry {journalInput: "string"}

Describe: Entry.prototype.wordCounter()

Test: "It will count the number words in a user entered passage"
Code:
let wordCount = 0;
const wordArray = this.journalInput.split(" ");
wordCount = wordArray.length;
return wordCount;
Expected outcome: Number of words

Describe: Entry.prototype.vowelCounter()

Test: "It will count the number of vowels in a user entered passage"
Code:
let journalEntry = "String goes here today"
let myEntry = new Entry(journalEntry)
expectedOut = myEntry.vowelCounter();
console.log(expectedOut[0])
console.log(expectedOut[1])
Expected outcome: 6, 15

Describe : Entry.prototype.getTeaser()

Test: "It will return the first 8 words of an entry"
Code:
let journalEntry = "This is a super long string that is for sure more than eight words."
let myEntry = new Entry(journalEntry)
myEntry.getTeaser;
Expected outcome: This is a super long string that is
