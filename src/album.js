const apiKey = "AIzaSyDEkdPs0fBAV8L66-ssTe9E0jMSSxYB_d0"

class Album {

  constructor(artist, album, videoId, videoTitle, videoThumb){
    this.artist = artist
    this.album = album
    this.videoId = videoId
    this.videoTitle = videoTitle,
    this.videoThumb = videoThumb
    this.category = ""
    this.genre = ""
    this.subGenre = ""
    Album.all.push(this)
  }

  static search(event){
    let searchArtist = document.getElementById('create-artist').value.replace(" ", "+");
    let searchAlbum = document.getElementById('create-album').value.replace(" ", "+");
    console.log(searchArtist, searchAlbum)

    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchArtist}+${searchAlbum}&key=${apiKey}`).then(res => res.json()).then(json => Album.showSearch(json))

  }

  static showSearch(json) {
    document.getElementById('search-results').innerHTML =""

    json.items.forEach(function(item){
      let searchResult = document.createElement('div')

      console.log(item.id.videoId)
      searchResult.id = item.id.videoId
      searchResult.innerHTML = `<h2><a href="https://www.youtube.com/watch?v=${item.id.videoId}" target="_blank">${item.snippet.title}</a></h2>
      <img src="${item.snippet.thumbnails.high.url}" alt="${item.snippet.title}">
      <button type="submit" data-id="${item.id.videoId}" data-title="${item.snippet.title}" class="add-button">Add Album to Collection</button><br><br>`
      console.log(searchResult)

      document.getElementById('search-results').appendChild(searchResult)

    })
  }


}

Album.all = [];