// DOM

const swiper = document.querySelector("#swiper1");
const swiper2 = document.querySelector("#swiper2");
const swiper3 = document.querySelector("#swiper3");
const swiper4 = document.querySelector("#swiper4");
const swiper5 = document.querySelector("#swiper5");
const view_p = document.querySelectorAll(".view p");
view_p.forEach((p) => {
  p.onclick = () => {
    window.location.href = "index2.html"
  };
});

const urlG = "https://api.multiplay.co.uk";

const url = "https://api.themoviedb.org/3/";
const api_key = "?api_key=2fa8f297328a4293f06805fe0c1b915d";
const img_url = "https://image.tmdb.org/t/p/original";

const api = {
  recommended_channels: "tv/airing_today",
  new_channels: "tv/on_the_air",
  new_movies: "movie/top_rated",
  popular: "movie/popular",
};

async function fetchRecChannels() {
  const res = await fetch(url + api.recommended_channels + api_key);
  const data = await res.json();
  console.log(data, "---data---");
  const { results } = data;
  renderNewChannels(swiper, results);
}
fetchRecChannels();

async function fetchNewChannels() {
  const res = await fetch(url + api.new_channels + api_key);
  const data = await res.json();
  console.log(data, "--newChannels---");
  const { results } = data;

  renderNewChannels(swiper2, results);
}
fetchNewChannels();

async function fetchNewMovies() {
  const res = await fetch(url + api.new_movies + api_key);
  const data = await res.json();
  console.log(data, "--newMovies---");
  const { results } = data;

  renderNewChannels(swiper3, results);
}
fetchNewMovies();

async function fetchPopularMovies() {
  const res = await fetch(url + api.popular + api_key);
  const data = await res.json();
  console.log(data, "---popular---");
  const { results } = data;

  renderNewChannels(swiper4, results);
}
fetchPopularMovies();

function renderNewChannels(dom, arr) {
  const channels = [
    "fox.png",
    "abs.png",
    "nbs.png",
    "es.png",
    "usa.png",
    "tru.png",
  ];
  let index = 0;
  let html = "";
  html += `<swiper-slide class="channels">`;
  for (let j = 0; j < 7; j++) {
    const { poster_path } = arr[index++];
    html += `
      <div class="card">
        <img
          src="${img_url + poster_path}"
          alt=""
        />
        <div class="card-text">
          <p class="ch-name">
            <img src="./img/${channels[j]}" alt="" />
          </p>
          <p>
            Enjoy the best of action packed <br />
            movies from NBC international...
          </p>
          <button class="w-now">Watch Now</button>
        </div>
      </div>`;
  }
  html += `</swiper-slide>`;
  dom.innerHTML = html;
  console.log(index);
}

const image = [
  "mario.png",
  "fortnite.png",
  "battlefield.png",
  "eldar.png",
  "maska.png",
  "sea.png",
  "sonic.png",
];

const html = image
  .map(
    (img) => `
        <img src="./img/${img}" alt="" />
`
  )
  .join("");

swiper5.innerHTML = `<swiper-slide class="channels">${html}</swiper-slide>`;
