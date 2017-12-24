class CreateArtists < ActiveRecord::Migration[5.1]
  def change
    create_table :artists do |t|
      t.string :name
      t.belongs_to :category, foreign_key: true
      t.belongs_to :genre, foreign_key: true
      t.belongs_to :sub_genre, foreign_key: true

      t.timestamps
    end
  end
end
