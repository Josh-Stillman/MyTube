class Category < ApplicationRecord
  has_many :genres
  has_many :sub_genres, through: :genres
  has_many :artists
  has_many :albums, through: :artists
end
