class SubGenre < ApplicationRecord
  belongs_to :genre
  has_one :category, through: :genre
  has_many :artists
  has_many :albums, through: :artists
end
