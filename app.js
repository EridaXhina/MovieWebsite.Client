const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});




document.getElementById("searchInput").addEventListener("change", function () {
  const query = this.value.trim();
  if (query.length < 3) return;

  localStorage.setItem("searchQuery", query);
  window.location.href = "search.html";
});



function renderResults(movies) {
  const container = document.querySelector(".movie-list");
  container.innerHTML = "";

  movies.forEach(movie => {
      const item = document.createElement("div");
      item.className = "movie-list-item";
      item.innerHTML = `
          <img class="movie-list-item-img" src="${movie.imageUrl}" alt="${movie.title}">
          <span class="movie-list-item-title">${movie.title}</span>
          <p class="movie-list-item-desc">${movie.description}</p>
          <button class="movie-list-item-button">Shiko</button>
          <button class="featured-button">+ Të preferuarat</button>
      `;
      container.appendChild(item);
  });
}








