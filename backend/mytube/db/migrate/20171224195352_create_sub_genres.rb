class CreateSubGenres < ActiveRecord::Migration[5.1]
  def change
    create_table :sub_genres do |t|
      t.string :name
      t.belongs_to :genre, foreign_key: true

      t.timestamps
    end
  end
end
