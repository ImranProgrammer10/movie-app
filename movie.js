const loadMovies=()=>{
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=74ce7d2f7f344729a706f6ed8e91f4b3`)
    .then(res => res.json())
    .then(data => setMovies(data.results))

} 
loadMovies()

const setMovies = movies => {
    const movieSpinner=document.getElementById('movie-spinner');
    movieSpinner.style.display="none";
    const movieContainer = document.getElementById('movie-container');
    movies.forEach(movie => {
        const movieBox = document.createElement('div');
        movieBox.classList.add("col-md-3");
        const imageUrl = "https://image.tmdb.org/t/p/original" + movie.poster_path;
        movieBox.innerHTML = `
        <div class="shadow rounded p-3 m-2">
        <img class="img-fluid" src=${imageUrl} alt="" />
        <h3>${movie.title}</h3>
        <p>${movie.overview.slice(0, 150)}</p>
        <button onclick="loadMovieDetails('${movie.id}')" class="btn btn-warning">Details</button>
         
    </div>
        `;
        movieContainer.appendChild(movieBox);

    })

}

const loadMovieDetails=(id)=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=74ce7d2f7f344729a706f6ed8e91f4b3`)
    .then(res => res.json())
    .then(data => setMovieDetails(data));
    
}
const setMovieDetails=(movie)=>{
    
    const movieDetails=document.getElementById('movie-details');
    movieDetails.textContent="";
    const movieBox=document.createElement('div');
    movieBox.innerHTML=`
    <h3>${movie.original_title}</h3>
    `;
    movieDetails.appendChild(movieBox);


}