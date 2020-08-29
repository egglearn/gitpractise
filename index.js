const entries = document.getElementById("entries");
const button = document.getElementById("button");
const form = document.getElementById("form");
const entriesSection = document.getElementById("entries-section");

const addEntry = (event) => {
  console.log("works");
  event.preventDefault();
  let entryText = document.createElement("div");
  entryText.innerText = entries.value;
  entryText.className = "entryText";
  entriesSection.appendChild(entryText);
  console.log(entryText);
  entries.value = " ";
};

form.addEventListener("submit", addEntry);
