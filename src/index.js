import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";

import { Entry } from "./business.js";

// function Entry(journalInput) {
//   this.journalInput = journalInput;
// }
window.Entry = Entry;
let journalEntry = "String here";
let myEntry = new Entry(journalEntry);
// console.log("test: " + myEntry.journalInput);
window.myEntry = myEntry;

for (let x = 0; x < 10; x++) {
  $("#entry-container").append(
    '<div class="card"><div class="card-title"><h2 class="heading-2">Title Goes Here</h2></div><div class="card-body">Preview: Eight words go here in a few minutes<br /><br /> Number of Words: 22<br /><br />Number of vowels: ' +
      x +
      "<br /><br />Number of consonants: 222<br /><br /></div></div>"
  );
}
