document.querySelector(".background").addEventListener("click", () => {
  document.getElementById("message").style.display = "block";
});

// Random flowers around
const flowerContainer = document.querySelector(".flowers");
for (let i = 0; i < 30; i++) {
  const flower = document.createElement("div");
  flower.classList.add("flower");
  flower.style.top = Math.random() * 100 + "%";
  flower.style.left = Math.random() * 100 + "%";
  flowerContainer.appendChild(flower);
}
