class Album < ApplicationRecord
  belongs_to :artist
  has_one :sub_genre, through: :artist
  has_one :genre, through: :artist
  has_one :category, through: :artist
end
