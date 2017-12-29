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



  static rollBack(){

  }


}
