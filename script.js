const searchform = document.querySelector("form");
const inputbox = document.querySelector(".input_field");
const movies = document.querySelector(".movie_container");

const getMovieInfo = async (movie) => {
  const key = "99d9b759";
  const url = `http://www.omdbapi.com/?apikey=${key}&t=${movie}`;
  console.log(url);
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  showMovieData(data);
};

const showMovieData = (md) => {
  movies.innerHTML = "";
  const { Title, Genre, imdbRating, Plot, Poster, Released, Runtime } = md;

  const movieElement = document.createElement("div");
  movieElement.classList.add("movie_element");
  movieElement.innerHTML = `<h1>${Title}</h1><p><strong>Rating : ${imdbRating}</strong></p>`;
  movies.appendChild(movieElement);

  const movieItems = document.createElement("div");
  movieItems.classList.add("movie_items");
  movieItems.innerHTML = `<h1>${Genre}</h1><p><strong>Plot : ${Plot}</strong></p>`;
  movies.appendChild(movieItems);

  const moviePoster = document.createElement("div");
  moviePoster.classList.add("movie_poster");
  moviePoster.innerHTML = <img src="${Poster}"></img>;
  movies.appendChild(moviePoster);
};

searchform.addEventListener("submit", (e) => {
  e.preventDefault();
  const movieName = inputbox.value.trim();
  if (movieName !== "") {
    getMovieInfo(movieName);
  }
});