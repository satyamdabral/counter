
const Textarea = document.querySelector('textarea');
const totalCount = document.getElementById("total");
const remainCount = document.getElementById("remain");

Textarea.addEventListener("input", () => {
  updateCounter();
});

function updateCounter() {
  totalCount.innerText = Textarea.value.length;
  remainCount.innerText = Textarea.getAttribute("maxlength") - Textarea.value.length;
}

updateCounter();
