document.addEventListener('DOMContentLoaded', function(event) {

createListeners()
});


function createListeners() {
  document.getElementById('create-button').addEventListener('click', Album.search)

  document.getElementById('search-results').addEventListener('click', addAlbumToCollection)
}

function addAlbumToCollection(event) {
    console.log(event)

    let searchArtist = document.getElementById('create-artist').value
    let searchAlbum = document.getElementById('create-album').value


    myAlbum = new Album(searchArtist, searchAlbum, event.target.dataset.id, event.target.dataset.title, event.target.parentElement.querySelector('img').src, document.getElementById('category-input').value, document.getElementById('genre-input').value, document.getElementById('subgenre-input').value )

    //artist div


    let newAlbumDiv = document.createElement('div')
    newAlbumDiv.id = myAlbum.videoTitle
    newAlbumDiv.innerHTML = `<h3><a href="https://www.youtube.com/watch?v=${myAlbum.videoId}" target="_blank">${myAlbum.artist} - ${myAlbum.album}</a></h3>
    <img src="${myAlbum.videoThumb}" alt="${myAlbum.videoTitle}" height="42" width="42">
    <button type="submit" data-id="x" data-title="x" class="delete-button">Remove</button><br><br>`

    document.getElementById('collection').appendChild(newAlbumDiv)

  }
