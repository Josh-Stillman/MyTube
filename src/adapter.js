class Adapter {

  static getCategories() {
    fetch('http://localhost:3000/api/v1/categories')
    .then(resp => resp.json())
    .then(json => {json.forEach(function(category){new Category(category)}); Category.displayCategories()})
  }

  static getGenres(event) {
    event.preventDefault()
    console.log(event)
    if (event.target.localName === "a") {
      //debugger
      let catId = event.target.parentElement.id
      fetch(`http://localhost:3000/api/v1/categories/${catId}`)
      .then(resp => resp.json())
      .then(json => {json.genres.forEach(function(genre){new Genre(genre)}); Genre.displayGenres(json)})
    }
  }

  static getSubGenres(event) {
    event.preventDefault()
    console.log(event)
    if (event.target.localName === "a") {
      //debugger
      let genreId = event.target.parentElement.id
      fetch(`http://localhost:3000/api/v1/genres/${genreId}`)
      .then(resp => resp.json())
      .then(json => {json.sub_genres.forEach(function(sub_genre){new SubGenre(sub_genre)}); SubGenre.displaySubGenres(json)})
    }
  }

  static getArtists(event) {
    event.preventDefault()
    console.log(event)
    if (event.target.localName === "a") {
      let subGenreId = event.target.parentElement.id
      fetch(`http://localhost:3000/api/v1/sub_genres/${subGenreId}`)
      .then(resp => resp.json())
      .then(json => {json.artists.forEach(function(artist){new Artist(artist)}); Artist.displayArtists(json)})
    }
  }

  static getAlbums(event) {
    event.preventDefault()
    console.log(event)
    if (event.target.localName === "a") {
      let artistId = event.target.parentElement.id
      fetch(`http://localhost:3000/api/v1/artists/${artistId}`)
      .then(resp => resp.json())
      // .then(json => console.log(json))
      .then(json => {json.albums.forEach(function(album){new Album(album)}); document.querySelector('#albums').innerHTML += `<h1>${json.name}</h1>`; Album.displayAlbums(json)})
    }
  }




}
