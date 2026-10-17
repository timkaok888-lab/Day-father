
const gallery = document.getElementById("gallery");

const photos = [
  "Photo5.jpg",
  "photo1.jpg",
  "photo2.jpg",
  "photo3.jpg",
  "photo4.jpg",
  "photo6.jpg",
  "photo7.jpg",
  "photo8.jpg",
  "photo9.jpg",
  "photo10.jpg",
  "photo11.jpg",
  "photo13.jpg",
  "photo15.jpg"
];

photos.forEach((filename, index) => {
  const figure = document.createElement("figure");
  const img = document.createElement("img");
  const caption = document.createElement("figcaption");

  img.src = filename;
  img.alt = "Семейная фотография " + (index + 1);
  img.loading = "lazy";


  img.onerror = () => figure.remove();

 figure.append(img);
  gallery.appendChild(figure);
});
