class CreateDogs < ActiveRecord::Migration[5.1]
  def change
    create_table :dogs do |t|
      t.string :name, null: false
      t.string :gender, null: false
      t.string :age, null: false
      t.string :breed, null: false
      t.string :image_url, null: false
      t.text :description
      t.timestamps
    end
  end
end
