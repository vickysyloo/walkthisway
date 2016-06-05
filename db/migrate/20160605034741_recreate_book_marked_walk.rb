class RecreateBookMarkedWalk < ActiveRecord::Migration
  def change
    create_table :bookmarked_walks do |t|
      t.integer :walk_id
      t.integer :user_id
      t.string :type

      t.timestamps null: false
    end
  end
end
