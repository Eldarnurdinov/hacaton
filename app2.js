// DOM
const moviesFooter = document.querySelectorAll(".nav-link.nav2  a")
const movie_name = document.querySelector(".movie_name")
const overview_h5 = document.querySelector(".overview")
const img_fon = document.querySelector(".img-fon")
const films = document.querySelectorAll(".films")

// REST API
const img_url = "https://image.tmdb.org/t/p/original"
const url = "https://api.themoviedb.org/3/"
const api_key = '?api_key=2fa8f297328a4293f06805fe0c1b915d&query='
const api = {
    search: "search/movie",
    new_movies: "movie/top_rated"
}

moviesFooter.forEach(a => {
    a.onclick = () => {
        console.log(a.innerText);
        fetchMovieByName(a.innerText)
    }
})

async function fetchMovieByName(name = "") {
    const res = await fetch(url + api.search + api_key + name)
    const data = await res.json()
    console.log(data);
    const { title, overview, poster_path } = data.results[0]
    movie_name.innerText = title
    overview_h5.innerText = overview.substring(0, 180) + "..."
    img_fon.src = img_url + poster_path
}