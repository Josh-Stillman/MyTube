# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)





Album.destroy_all
Artist.destroy_all
SubGenre.destroy_all
Genre.destroy_all
Category.destroy_all

rock = Category.create(name: "Rock")
dirtbag = Genre.create(name: "Dirtbag/punk", category: rock)
postpunk = SubGenre.create(name: "Post-Punk", genre: dirtbag)

wire = Artist.create(name: "Wire", category: rock, genre: dirtbag, subgenre: postpunk)

pink = Album.create(name: "Pink Flag", link: "tNVdziest58", playcount: 0, artist: wire)
