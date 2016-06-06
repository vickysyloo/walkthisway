class CreateGalleries < ActiveRecord::Migration
  def change
    create_table :galleries do |t|
      t.string :picture
      t.integer :walk_id

      t.timestamps null: false
    end
  end
end
