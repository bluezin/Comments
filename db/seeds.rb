# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create(name: "yadira", image_url: "https://lh3.googleusercontent.com/a-/AOh14Gi61BLRpSTTPdDYjbBcfm091-flvdyjPMokG5aORQ=s96-c")

comments = Comment.create([{ content: "Ruby on Rails, es un conjunto de herramientas para la creación de aplicaciones web escrito en Ruby, un lenguaje de programación dinámico y de propósito general. Tu que opinas??", user: user, like: 1 }])


