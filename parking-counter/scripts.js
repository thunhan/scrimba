let count = 0;
let countEl = document.getElementById("count");
let entries = [];
let entriesEl = document.getElementById("entries");

document.getElementById("increment").addEventListener("click", () => {
  count++;
  countEl.textContent = count;
});

document.getElementById("save").addEventListener("click", () => {
  entries.push(count);
  entriesEl.textContent = `Previous entries: ${entries.join(" - ")}`;
  count = 0;
  countEl.textContent = count;
});
