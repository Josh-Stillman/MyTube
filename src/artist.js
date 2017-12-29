class Artist {
  constructor(obj){
    this.id = obj.id
    this.name = obj.name
    Artist.all.push(this)
  }

  static displayArtists(json){
    //sort categories? genre.all.sort(function(){})
    Artist.all.forEach(function(artist){
      let artistDiv = document.createElement('div')
      artistDiv.class = "artist"
      artistDiv.id = artist.id
      artistDiv.innerHTML = `<a href="">${artist.name}</a>`
      document.getElementById('artists').appendChild(artistDiv)
      document.getElementById('artists').style.display = ''
      document.getElementById('sub_genres').style.display = 'none'

      $("#nav-sub_genres").removeClass("active");
      $("#nav-artists").addClass("active");

      let sText = document.getElementById('nav-sub_genres').innerText
      document.getElementById('nav-sub_genres').innerHTML = `<a href="">${sText}</a>`

      document.getElementById('nav-artists').innerHTML = `${json.name}`
      $("#nav-artists").show()

    })
  }
}

Artist.all = []
