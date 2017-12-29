document.addEventListener('DOMContentLoaded', function(event) {

  Adapter.getCategories()


  createListeners()
});


function createListeners() {
  document.getElementById('search-button').addEventListener('click', Album.search)
  document.getElementById('search-results').addEventListener('click', addAlbumToCollection)

  document.getElementById('search-button').addEventListener('click', Album.search)
  document.getElementById('categories').addEventListener('click', Adapter.getGenres)
  document.getElementById('genres').addEventListener('click', Adapter.getSubGenres)
  document.getElementById('sub_genres').addEventListener('click', Adapter.getArtists)
  document.getElementById('artists').addEventListener('click', Adapter.getAlbums)

  document.getElementById('nav-genres').style.display = 'none'
  document.getElementById('nav-sub_genres').style.display = 'none'
  document.getElementById('nav-artists').style.display = 'none'
  document.getElementById('nav-albums').style.display = 'none'

  document.getElementById('nav-bar').addEventListener('click', NavBar.rollBack)

  document.getElementById('genres').style.display = 'none'
  document.getElementById('sub_genres').style.display = 'none'
  document.getElementById('artists').style.display = 'none'
  document.getElementById('albums').style.display = 'none'
  document.getElementById('search').style.display = 'none'


}

function neil(event){
  event.preventDefault()
  if (event.target.localName === 'a') {
    document.getElementById('categories').style.display = 'none'
    document.getElementById('genres').style.display = 'none'
    document.getElementById('sub_genres').style.display = 'none'
    document.getElementById('artists').style.display = 'none'
    document.getElementById('albums').style.display = 'none'
    document.getElementById('search').style.display = 'none'


  switch (event.target.parentElement.id) {
  case 'nav-search':

    document.getElementById('search').style.display = ''
    document.getElementById('nav-genres').style.display = 'none'
    document.getElementById('nav-sub_genres').style.display = 'none'
    document.getElementById('nav-artists').style.display = 'none'
    document.getElementById('nav-albums').style.display = 'none'

    document.getElementById('genres').innerHTML =""
    document.getElementById('sub_genres').innerHTML =""
    document.getElementById('artists').innerHTML =""
    document.getElementById('albums').innerHTML =""
    Genre.all = []
    SubGenre.all = []
    Artist.all = []
    Album.all = []
    break;
  case 'nav-categories':
    document.getElementById('categories').style.display = ''
    document.getElementById('nav-genres').style.display = 'none'
    document.getElementById('nav-sub_genres').style.display = 'none'
    document.getElementById('nav-artists').style.display = 'none'
    document.getElementById('nav-albums').style.display = 'none'

    document.getElementById('genres').innerHTML =""
    document.getElementById('sub_genres').innerHTML =""
    document.getElementById('artists').innerHTML =""
    document.getElementById('albums').innerHTML =""

    Genre.all = []
    SubGenre.all = []
    Artist.all = []
    Album.all = []
    break;
  case 'nav-genres':
    document.getElementById('genres').style.display = ''
    break;
  case 'nav-sub_genres':
    document.getElementById('sub_genres').style.display = ''
    break;
  case 'nav-artists':
    document.getElementById('artists').style.display = ''
    break;
  }
    //iterate through divs.

    //hide all other divs, show relevant div, change nav bar active classes.



  console.log(event)
}
  // document.getElementById('albums').style.display = ''
  // document.getElementById('artists').style.display = 'none'
}

function addAlbumToCollection(event) {
    console.log(event)

    let searchArtist = document.getElementById('search-artist').value
    let searchAlbum = document.getElementById('search-album').value


    myAlbum = new Album(searchArtist, searchAlbum, event.target.dataset.id, event.target.dataset.title, event.target.parentElement.querySelector('img').src, document.getElementById('category-input').value, document.getElementById('genre-input').value, document.getElementById('subgenre-input').value )

    //artist div


    let newAlbumDiv = document.createElement('div')
    newAlbumDiv.id = myAlbum.videoTitle
    newAlbumDiv.innerHTML = `<h3><a href="https://www.youtube.com/watch?v=${myAlbum.videoId}" target="_blank">${myAlbum.artist} - ${myAlbum.album}</a></h3>
    <img src="${myAlbum.videoThumb}" alt="${myAlbum.videoTitle}" height="42" width="42">
    <button type="submit" data-id="x" data-title="x" class="delete-button">Remove</button><br><br>`

    document.getElementById('collection').appendChild(newAlbumDiv)

  }
