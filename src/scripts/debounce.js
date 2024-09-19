const languages = [
  { label: "JavaScript", value: "javascript" },
  { label: "Python", value: "python" },
  { label: "Java", value: "java" },
  { label: "C++", value: "cpp" },
  { label: "Ruby", value: "ruby" },
  { label: "Go", value: "go" },
  { label: "Rust", value: "rust" },
  { label: "PHP", value: "php" },
  { label: "Swift", value: "swift" },
  { label: "Kotlin", value: "kotlin" },
];

const searchInput = document.getElementById("search");
const debounceInput = document.getElementById("debounce");
const resultDiv = document.getElementById("results");

let debounce = 1000;

function insetResultList(list) {
  resultDiv.innerHTML = "";

  if (!list.length) {
    resultDiv.innerHTML = "Not Found";
  }

  list.forEach((item) => {
    const div = document.createElement("li");
    div.textContent = item.label;
    resultDiv.appendChild(div);
  });
}

function debounceFilter(list) {
  let timeout;

  clearTimeout();

  timeout = setTimeout(() => {
    insetResultList(list);
  }, debounce);
}

debounceInput.addEventListener("input", (event) => {
  const number = Number(event.target.value);
  debounce = isNaN(number) ? debounce : number;
});

searchInput.addEventListener("input", (event) => {
  const string = event.target.value;

  const filteredList = languages.filter((item) =>
    item.label.toUpperCase().startsWith(string.toUpperCase())
  );

  debounceFilter(filteredList);
});

insetResultList(languages);
