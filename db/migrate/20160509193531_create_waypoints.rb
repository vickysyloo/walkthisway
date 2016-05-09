class CreateWaypoints < ActiveRecord::Migration
  def change
    create_table :waypoints do |t|
      t.string :name
      t.text :description
      t.string :address
      t.float :latitude
      t.float :longitude
      t.integer :path_id

      t.timestamps null: false
    end
  end
end
