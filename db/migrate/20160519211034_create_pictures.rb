class CreatePictures < ActiveRecord::Migration
  def change
    create_table :pictures do |t|
      t.string :picture
      t.integer :walk_id

      t.timestamps null: false
    end
  end
end
