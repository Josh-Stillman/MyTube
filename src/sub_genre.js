class SubGenre {
  constructor(obj){
    this.id = obj.id
    this.name = obj.name
    SubGenre.all.push(this)
  }

  static displaySubGenres(json){
    //sort categories? genre.all.sort(function(){})
    SubGenre.all.forEach(function(sub_genre){
      let subGenreDiv = document.createElement('div')
      subGenreDiv.class = "sub_genre"
      subGenreDiv.id = sub_genre.id
      subGenreDiv.innerHTML = `<a href="" class="btn btn-primary btn-lg">${sub_genre.name}</a><br><br>`
      document.getElementById('sub_genres').appendChild(subGenreDiv)
    })
    document.getElementById('genres').style.display = 'none'
    document.getElementById('sub_genres').style.display = ''

    NavBar.update('#nav-genres', '#nav-sub_genres', json.name)
  }
}

SubGenre.all = []
