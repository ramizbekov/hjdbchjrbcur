const input = document.querySelector(".input");
const searchBtn = document.getElementById("searchBtn") || document.querySelector("button");
const items = document.querySelectorAll(".item");

searchBtn.addEventListener("click", () => {
  const searchValue = input.value.toLowerCase().trim();

  items.forEach(item => {
    const title = item.querySelector("h3").innerText.toLowerCase();

    if (title.includes(searchValue)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});