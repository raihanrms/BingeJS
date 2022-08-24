/* 🌟 APP: Netflix Clone
    Here we have the Netflix app but it's up to you to make 
    it work by pulling all the movies using an API!
*/

// Call the main functions the page is loaded
window.onload = () => {
    getOriginals()
    getTrendingNow()
    getTopRated()
  }
  
  // ** Helper function that makes dynamic API calls **
  function fetchMovies(url, dom_element, path_type) {
    // Use Fetch with the url passed down
    fetch(url)
    .then(response => {
      // console.log(response)
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Something went wrong!')
      }
    
    // Within Fetch get the response and call showMovies() with the data , dom_element, and path type
    }).then(data => {
      // console.log(data)
      showMovies(data, dom_element, path_type)
    }).catch(error => {
      console.log(error)
    })
  }

  // testing function call
  // fetchMovies('https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213')
  
  //  ** Function that displays the movies to the DOM **
  showMovies = (movies, dom_element, path_type) => {
    
    // Create a variable that grabs id or class
    let moviesEl = document.querySelector(dom_element)  
    // console.log(movies.results)

    
    // Loop through object
    for (let movie of movies.results){
    // console.log(movie)
            
      // Within loop create an img element
      let imageElement = document.createElement('img')      
      
      // Set attribute
      imageElement.setAttribute('data-id', movie.id)      
      
      // Set source - putting the picture in the element
      imageElement.src = `https://image.tmdb.org/t/p/original${movie[path_type]}`
            
      // Append the imageElement to the dom_element selected
      moviesEl.appendChild(imageElement)      
    }
  }  
  
// testing it out
// fetchMovies('https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213', '.original__movies', 'poster_path')

  // ** Function that fetches Netflix Originals **
  function getOriginals() {
    let url = 'https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213'
    fetchMovies(url, '.original__movies', 'poster_path')
  }

  // ** Function that fetches Trending Movies **
  function getTrendingNow() {
    let url = 'https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045'
    fetchMovies(url, '#trending', 'backdrop_path') 
  }

  // ** Function that fetches Top Rated Movies **
  function getTopRated() {
    let url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1'  
    fetchMovies(url, '#top_rated', 'backdrop_path')
  }