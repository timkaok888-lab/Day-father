
const gallery = document.getElementById("gallery");

for (let i = 1; i <= 15; i++) {
  const img = document.createElement("img");
  img.src = `Images/photo${i}.jpg`;
  img.alt = `Фотография ${i}`;
  img.loading = "lazy";

  img.onerror = function () {
    this.parentElement.style.display = "none";
  };

  gallery.appendChild(img);
}
