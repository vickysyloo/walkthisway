class CreateWalks < ActiveRecord::Migration
  def change
    create_table :walks do |t|
      t.string :name
      t.text :description
      t.string :picture
      t.integer :category_id
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
