class Album {
  constructor(obj){
    this.id = obj.id
    this.name = obj.name
    this.link = obj.link
    this.image = obj.image
    this.playCount = obj.play_count
    Album.all.push(this)
  }

  static displayAlbums(json){
    //sort categories? genre.all.sort(function(){})


    Album.all.forEach(function(album){
      let albumDiv = document.createElement('div')
      albumDiv.class = "album"
      albumDiv.id = album.id
      albumDiv.innerHTML = `<a href="https://www.youtube.com/watch?v=${album.link}" target = "_blank" class="btn btn-primary btn-lg">${album.name}</a>          <img src="${album.image}" alt=""><a href="" class="btn" data-kind="edit">edit</a><a href="" class="btn" data-kind="delete">delete</a><br><br>`

      document.getElementById('albums').appendChild(albumDiv)
      document.getElementById('albums').innerHTML += "<br>"


    })
    document.getElementById('albums').style.display = ''
    document.getElementById('artists').style.display = 'none'

    NavBar.update('#nav-artists', '#nav-albums', json.name)
  }

  static change(event){
    event.preventDefault()
    if (event.target.dataset.kind === "edit") {

      // fetch(`http://localhost:3000/api/v1/albums`, {
      //   method: "POST",
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Accept': 'application/json'
      //   },
      //   body: albumBody
      // })
      // .then(resp => resp.json())
      // .then(json => {console.log("success"); console.log(json)})
      //
    } else if (event.target.dataset.kind === "delete") {


      fetch(`http://localhost:3000/api/v1/albums/${event.target.parentElement.id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then(resp => {Adapter.renewAlbums(document.querySelector('#albums').dataset.artist_id)})
    }
  }

}

Album.all = []








// const apiKey = "AIzaSyDEkdPs0fBAV8L66-ssTe9E0jMSSxYB_d0"
//
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
//
//   static search(event){
//     let searchArtist = document.getElementById('create-artist').value.replace(" ", "+");
//     let searchAlbum = document.getElementById('create-album').value.replace(" ", "+");
//     console.log(searchArtist, searchAlbum)
//
//     fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchArtist}+${searchAlbum}&key=${apiKey}`).then(res => res.json()).then(json => Album.showSearch(json))
//
//   }
//
//   static showSearch(json) {
//     document.getElementById('search-results').innerHTML =""
//
//     json.items.forEach(function(item){
//       let searchResult = document.createElement('div')
//
//       console.log(item.id.videoId)
//       searchResult.id = item.id.videoId
//       searchResult.innerHTML = `<h2><a href="https://www.youtube.com/watch?v=${item.id.videoId}" target="_blank">${item.snippet.title}</a></h2>
//       <img src="${item.snippet.thumbnails.high.url}" alt="${item.snippet.title}">
//       <button type="submit" data-id="${item.id.videoId}" data-title="${item.snippet.title}" class="add-button">Add Album to Collection</button><br><br>`
//       console.log(searchResult)
//
//       document.getElementById('search-results').appendChild(searchResult)
//
//     })
//   }
//
//
// }
//
// Album.all = [];
