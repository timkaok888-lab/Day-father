
const gallery = document.getElementById("gallery");

const photos = [
  "Photo5.jpg.heic",
  "photo2.jpg.jpeg",
  "photo3.jpg.HEIC",
  "photo4.jpg.HEIC",
  "photo6.jpg.HEIC",
  "photo7.jpg.HEIC",
  "photo8.jpg.heic",
  "photo9.jpg.heic",
  "photo11.jpg.HEIC",
  "photo13.jpg.HEIC",
  "photo15.jpg.HEIC"
];

photos.forEach((filename, index) => {
  const figure = document.createElement("figure");
  const img = document.createElement("img");
  const caption = document.createElement("figcaption");

  img.src = filename;
  img.alt = "Семейная фотография " + (index + 1);
  img.loading = "lazy";

  caption.textContent = "Наш момент 💙";

  img.onerror = () => {
    figure.remove();
  };

  figure.append(img, caption);
  gallery.appendChild(figure);
});
t
