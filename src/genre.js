class Genre {
  constructor(obj){
    this.id = obj.id
    this.name = obj.name
    if (Genre.all.includes(this)){

    } else {
    Genre.all.push(this)
  }
  }

  static displayGenres(json){
    //sort categories? genre.all.sort(function(){})
    Genre.all.forEach(function(genre){
      let genreDiv = document.createElement('div')
      genreDiv.class = "genre"
      genreDiv.id = genre.id
      genreDiv.innerHTML = `<a href="">${genre.name}</a>`
      document.getElementById('genres').appendChild(genreDiv)

    })

    document.getElementById('genres').style.display = ''
    document.getElementById('categories').style.display = 'none'

    NavBar.update('#nav-categories', '#nav-genres', json.name)

  }
}

Genre.all = []
