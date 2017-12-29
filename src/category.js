class Category {
  constructor(json){
    this.id = json.id
    this.name = json.name
    Category.all.push(this)
  }

  static displayCategories(){
    //sort categories? Category.all.sort(function(){})
    Category.all.forEach(function(category){
      let catDiv = document.createElement('div')
      catDiv.class = "category"
      catDiv.id = category.id
      catDiv.innerHTML = `<a href="">${category.name}</a>`
      document.getElementById('categories').appendChild(catDiv)
      //create div
      //append div
    })
  }
}

Category.all = []
