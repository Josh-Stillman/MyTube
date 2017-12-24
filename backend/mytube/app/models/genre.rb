class Genre < ApplicationRecord
  belongs_to :category
  has_many :sub_genres
  has_many :artists
  has_many :albums, through: :artists
end
