class NavBar {


//document.querySelector('#nav-genres').nextElementSibling.id  OR $(el).next();

  static update(oldId, newId, clickedName){

    //change classes of old and new breacrumbs
    $(oldId).removeClass("active");
    $(newId).addClass("active");

    //change HTML of old and new breadcrumb
    $(oldId).html(`<a href="">${$(oldId).text()}</a>`)
    $(newId).html(`${clickedName}`)

    //show new breadcrumb
    $(newId).show()
  }



  static rollBack(event){
    event.preventDefault()

    if (event.target.localName === 'a') {

      const tree = [{nav: 'nav-search', view: 'search', store: undefined}, {nav: 'nav-categories', view: 'categories', store: Category.all}, {nav: 'nav-genres', view: 'genres', store: Genre.all}, {nav: 'nav-sub_genres', view: 'sub_genres', store: SubGenre.all}, {nav: 'nav-artists', view: 'artists', store: Artist.all}, {nav: 'nav-albums', view: 'albums', store: Album.all}]

      let selectedNav = tree.findIndex(function(obj){return obj.nav === event.target.parentElement.id})

      let clickedId = event.target.parentElement.id
      $(`#${clickedId}`).addClass("active");

      let clickedText = $(`#${clickedId}`).text()
      $(`#${clickedId}`).html(`${clickedText}`)

      let i

      if (selectedNav === 0) {
        i = selectedNav + 2
        $(`#${tree[selectedNav + 1].view}`).hide()
        $(`#nav-categories`).removeClass("active");
        $(`#nav-categories`).html(`<a href="">Categories</a>`);
      } else if (selectedNav === 1) {
        i = selectedNav + 1
        $(`#nav-search`).removeClass("active");
        $(`#nav-search`).html(`<a href="">Search</a>`);
        $("#search").hide()
      } else {
        i = selectedNav + 1
      }


        for (i; i < tree.length; i++) {
          $(`#${tree[i].nav}`).hide()
          $(`#${tree[i].view}`).hide()
          $(`#${tree[i].view}`).empty()
          tree[i].store.length = 0
        }

      $(`#${tree[selectedNav].view}`).show()
    }


  }


}
