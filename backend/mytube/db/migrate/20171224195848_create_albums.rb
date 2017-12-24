class CreateAlbums < ActiveRecord::Migration[5.1]
  def change
    create_table :albums do |t|
      t.string :name
      t.string :link
      t.integer :play_count
      t.belongs_to :artist, foreign_key: true

      t.timestamps
    end
  end
end
