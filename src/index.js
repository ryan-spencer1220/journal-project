import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
let currentPost = 0;
import { Entry } from "./business.js";

function contactListener(id) {
  $("#my-heading-" + id).on("click", function () {
    alert("HEY there" + id);
  });
}

$("form#new-post").submit(function (event) {
  event.preventDefault();
  let journalEntry = $("#journal-input-text").val();
  let myEntry = new Entry(journalEntry);
  let wordCount = myEntry.wordCounter();
  let vowelCount = myEntry.vowelCounter();
  let firstEight = myEntry.getTeaser();

  $("#entry-container").append(
    '<div class="card"><div class="card-title"><h2 id="my-heading-' +
      currentPost +
      '" class="heading-2">Title Goes Here</h2></div><div class="card-body">Preview: ' +
      firstEight +
      "<br /><br /> Number of Words: " +
      wordCount +
      "<br /><br />Number of vowels: " +
      vowelCount[0] +
      "<br /><br />Number of consonants: " +
      vowelCount[1] +
      "<br /><br /></div></div>"
  );

  contactListener(currentPost);

  currentPost += 1;
});
