class Artist < ApplicationRecord
  belongs_to :category
  belongs_to :genre
  belongs_to :sub_genre
  has_many :albums
end
