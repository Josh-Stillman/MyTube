const apiKey = "AIzaSyDEkdPs0fBAV8L66-ssTe9E0jMSSxYB_d0"

class Search {

  static loadSearchPage(){
    document.getElementById('artist-select').innerHTML = ""
    document.getElementById('artist-select').innerHTML += `<option value="blank">Select Artist</option><option value="new">Create New Artist</option>`
    // $('#genre-select').hide()
    // $('#sub_genre-select').hide()

    $('#category-div').hide()
    $('#new-artist-div').hide()
    $('#genre-div').hide()
    $('#sub_genre-div').hide()
    $('#search-button').hide()
    $('#search-results').hide()


    document.getElementById('category-select').innerHTML = ""
    document.getElementById('category-select').innerHTML += `<option value="blank">Select Category</option><option value="new">Create New Category</option>`
    //populate categories
    fetch(`http://localhost:3000/api/v1/artists`)
    .then(resp => resp.json())
    .then(json => {json.forEach(function(artist){
      document.getElementById('artist-select').innerHTML += `<option value="${artist.id}">${artist.name}</option>`
    })})

    fetch(`http://localhost:3000/api/v1/categories`)
    .then(resp => resp.json())
    .then(json => {json.forEach(function(category){
      document.getElementById('category-select').innerHTML += `<option value="${category.id}">${category.name}</option>`
    })})
  }

  static selectArtist(event){

    if ($('#artist-select').val() === "new"){
      $('#new-artist-div').show()
      $('#category-div').show()
      $('#new-category-div').hide()
      $('#search-button').hide()
      $('#search-button').hide()
    } else if ($('#artist-select').val() !== "new" && $('#artist-select').val() !== "blank"){
      $('#search-button').show()
      Search.hideAll()
    }
  }

  static hideAll(){
    $('#new-artist-div').hide()
    $('#category-div').hide()
    $('#genre-div').hide()
    $('#sub_genre-div').hide()

  }

  static selectCategory(event){
    if ($('#category-select').val() === "new"){
      $('#new-category-div').show()

      $('#new-genre-div').show()
      $('#genre-div').show()
      $('#new-sub_genre-div').show()
      $('#sub_genre-div').show()
      document.getElementById('genre-select').innerHTML = '<option value="new">Create New Genre</option>'
      document.getElementById('sub_genre-select').innerHTML = '<option value="new">Create New Sub-Genre</option>'
      $('#search-button').show()
    } else if ($('#category-select').val() !== "new" && $('#category-select').val() !== "blank"){
      document.getElementById('genre-select').innerHTML = ""
      document.getElementById('genre-select').innerHTML += `<option value="blank">Select Genre</option><option value="new">Create New Genre</option>`
      document.getElementById('sub_genre-select').innerHTML = ""
      document.getElementById('sub_genre-select').innerHTML += `<option value="blank">Select Sub-Genre</option><option value="new">Create New SubGenre</option>`
      $('#genre-div').hide()
      $('#sub_genre-div').hide()

      fetch(`http://localhost:3000/api/v1/categories/${document.getElementById('category-select').value}`)
      .then(resp => resp.json())
      .then(json => {json.genres.forEach(function(genre){
        document.getElementById('genre-select').innerHTML += `<option value="${genre.id}">${genre.name}</option>`
      })})
      $('#genre-div').show()
      $('#new-genre-div').hide()
    }



  }

  static selectGenre(){
    if ($('#genre-select').val() === "new"){
      $('#new-genre-div').show()
      $('#new-genre-div').show()

      $('#new-sub_genre-div').show()
      $('#sub_genre-div').show()
      document.getElementById('sub_genre-select').innerHTML = '<option value="new">Create New Sub-Genre</option>'
      $('#search-button').show()



    } else if ($('#genre-select').val() !== "new" && $('#genre-select').val() !== "blank"){

    document.getElementById('sub_genre-select').innerHTML = ""
    document.getElementById('sub_genre-select').innerHTML += `<option value="blank">Select Sub-Genre</option><option value="new">Create New SubGenre</option>`
    //$('#sub_genre-select').hide()

    fetch(`http://localhost:3000/api/v1/genres/${document.getElementById('genre-select').value}`)
    .then(resp => resp.json())
    .then(json => {json.sub_genres.forEach(function(sub_genre){
      document.getElementById('sub_genre-select').innerHTML += `<option value="${sub_genre.id}">${sub_genre.name}</option>`
    })})

    $('#sub_genre-div').show()
    $('#new-sub_genre-div').hide()
    }

  }

  static selectSubGenre(){
    if ($('#sub_genre-select').val() === "new"){
      $('#new-sub_genre-div').show()
    }
    $('#search-button').show()
}

  static addAlbum(event){
    event.preventDefault()
    let searchAlbum = document.getElementById('search-album').value
    let searchImage = event.target.parentElement.querySelector('img').src
    let searchLink = event.target.dataset.id

    if (document.getElementById('artist-select').value !== "new") {
      let searchArtistId = document.getElementById('artist-select').value


      let myBody = JSON.stringify({name: searchAlbum, link: searchLink, play_count: 0, artist_id: searchArtistId, image: searchImage})
      fetch(`http://localhost:3000/api/v1/albums`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: myBody
      })
      .then(resp => resp.json())
      .then(json => console.log(json))
    }
    else if (document.getElementById('artist-select').value === "new" && document.getElementById('category-select').value !== "new" && document.getElementById('genre-select').value !== "new" && document.getElementById('sub_genre-select').value !== "new"){

      let searchArtistName = document.getElementById('search-artist').value
      let searchAlbum = document.getElementById('search-album').value
      let searchImage = event.target.parentElement.querySelector('img').src
      let searchLink = event.target.dataset.id

      let artistBody = JSON.stringify({name: searchArtistName, category_id: document.getElementById('category-select').value, genre_id: document.getElementById('genre-select').value, sub_genre_id: document.getElementById('sub_genre-select').value })
      fetch(`http://localhost:3000/api/v1/artists`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: artistBody
      })
      .then(resp => resp.json())
      .then(json => {
        let albumBody = JSON.stringify({name: searchAlbum, link: searchLink, play_count: 0, artist_id: json.id, image: searchImage})
        fetch(`http://localhost:3000/api/v1/albums`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: albumBody
        })
        .then(resp => resp.json())
        .then(json => console.log(json))
      })

    } else if (document.getElementById('artist-select').value === "new" && document.getElementById('category-select').value !== "new" && document.getElementById('genre-select').value !== "new" && document.getElementById('sub_genre-select').value === "new") {
      Search.createFromSubGenre(document.getElementById('category-select').value, document.getElementById('genre-select').value, event)

    } else if (document.getElementById('artist-select').value === "new" && document.getElementById('category-select').value !== "new" && document.getElementById('genre-select').value === "new" && document.getElementById('sub_genre-select').value === "new") {
      Search.createFromGenre(document.getElementById('category-select').value, event)

    } else if (document.getElementById('artist-select').value === "new" && document.getElementById('category-select').value === "new" && document.getElementById('genre-select').value === "new" && document.getElementById('sub_genre-select').value === "new") {
      Search.createFromCategory(event)

    }

  }

  //functions to create new artist with new genres

  static createFromCategory(event){
    let categoryBody = JSON.stringify({name: document.getElementById('category-input').value})
    fetch(`http://localhost:3000/api/v1/categories`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: categoryBody
    })
    .then(resp => resp.json())
    .then(json => {console.log(json); Search.createFromGenre(json.id, event)})
  }

  static createFromGenre(CategoryId, event){
    let genreBody = JSON.stringify({name: document.getElementById('genre-input').value, category_id: CategoryId})
    fetch(`http://localhost:3000/api/v1/genres`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: genreBody
    })
    .then(resp => resp.json())
    .then(json => {console.log(json); Search.createFromSubGenre(json.category_id, json.id, event)})
  }

  static createFromSubGenre(CategoryId, GenreId, event){
    let SubGenreBody = JSON.stringify({name: document.getElementById('sub_genre-input').value, genre_id: GenreId})
    fetch(`http://localhost:3000/api/v1/sub_genres`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: SubGenreBody
    })
    .then(resp => resp.json())
    .then(json => {console.log(json); Search.createFromArtist(CategoryId, GenreId, json.id, event)})
  }

  static createFromArtist(CategoryId, GenreId, SubGenreId, event){
    let artistBody = JSON.stringify({name: document.getElementById('search-artist').value, category_id: CategoryId, genre_id: GenreId, sub_genre_id: SubGenreId })
    fetch(`http://localhost:3000/api/v1/artists`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: artistBody
    })
    .then(resp => resp.json())
    .then(json => {console.log(json); Search.createFromAlbum(json.id, event)})
  }

  static createFromAlbum(ArtistId, event){

    let searchArtistName = document.getElementById('search-artist').value
    let searchAlbum = document.getElementById('search-album').value
    let searchImage = event.target.parentElement.querySelector('img').src
    let searchLink = event.target.dataset.id
    debugger
    let albumBody = JSON.stringify({name: searchAlbum, link: searchLink, play_count: 0, artist_id: ArtistId, image: searchImage})

    fetch(`http://localhost:3000/api/v1/albums`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: albumBody
    })
    .then(resp => resp.json())
    .then(json => {console.log("success"); console.log(json)})
  }







  // static newAlbum(searchAlbum, searchLink, searchArtistId, searchImage){
  //   let searchArtistId = document.getElementById('artist-select').value
  //
  //
  //   let myBody = JSON.stringify({name: searchAlbum, link: searchLink, play_count: 0, artist_id: searchArtistId, image: searchImage})
  //   fetch(`http://localhost:3000/api/v1/albums`, {
  //     method: "POST",
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     body: myBody
  //   })
  // }
  //
  // static newArtist(){
  //
  // }






  static runSearch(event){
    let searchArtist
    let searchAlbum
    if (document.getElementById('artist-select').value !== "new") {
      searchArtist = $("#artist-select option:selected").text().replace(" ", "+");
      searchAlbum = document.getElementById('search-album').value.replace(" ", "+");
    } else {
      searchArtist = document.getElementById('search-artist').value.replace(" ", "+");
      searchAlbum = document.getElementById('search-album').value.replace(" ", "+");
    }

    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchArtist}+${searchAlbum}&key=${apiKey}`).then(res => res.json()).then(json => Search.displaySearchResults(json))

  }

  static displaySearchResults(json){
    document.getElementById('search-results').innerHTML =""

    json.items.forEach(function(item){
      let searchResult = document.createElement('div')

      searchResult.id = item.id.videoId
      searchResult.innerHTML = `<h2><a href="https://www.youtube.com/watch?v=${item.id.videoId}" target="_blank">${item.snippet.title}</a></h2>
      <img src="${item.snippet.thumbnails.high.url}" alt="${item.snippet.title}">
      <button type="submit" data-id="${item.id.videoId}" data-title="${item.snippet.title}" class="add-button">Add Album to Collection</button><br><br>`
      console.log(searchResult)

      document.getElementById('search-results').appendChild(searchResult)

    })
    $('#search-results').show()

  }

}




// class Album {
//
//   constructor(artist, album, videoId, videoTitle, videoThumb){
//     this.artist = artist
//     this.album = album
//     this.videoId = videoId
//     this.videoTitle = videoTitle,
//     this.videoThumb = videoThumb
//     this.category = ""
//     this.genre = ""
//     this.subGenre = ""
//     Album.all.push(this)
//   }

  // static search(event){
  //   let searchArtist = document.getElementById('create-artist').value.replace(" ", "+");
  //   let searchAlbum = document.getElementById('create-album').value.replace(" ", "+");
  //   console.log(searchArtist, searchAlbum)
  //
  //   fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchArtist}+${searchAlbum}&key=${apiKey}`).then(res => res.json()).then(json => Album.showSearch(json))
  //
  // }
  //
  // static showSearch(json) {
  //   document.getElementById('search-results').innerHTML =""
  //
  //   json.items.forEach(function(item){
  //     let searchResult = document.createElement('div')
  //
  //     console.log(item.id.videoId)
  //     searchResult.id = item.id.videoId
  //     searchResult.innerHTML = `<h2><a href="https://www.youtube.com/watch?v=${item.id.videoId}" target="_blank">${item.snippet.title}</a></h2>
  //     <img src="${item.snippet.thumbnails.high.url}" alt="${item.snippet.title}">
  //     <button type="submit" data-id="${item.id.videoId}" data-title="${item.snippet.title}" class="add-button">Add Album to Collection</button><br><br>`
  //     console.log(searchResult)
  //
  //     document.getElementById('search-results').appendChild(searchResult)
  //
  //   })
  // }


// }
