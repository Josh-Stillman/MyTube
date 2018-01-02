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
      catDiv.innerHTML = `<a href="" class="btn btn-primary btn-lg">${category.name}</a><br><br>`
      document.getElementById('categories').appendChild(catDiv)


    })
  }
}

Category.all = []
