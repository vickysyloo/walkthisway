class MakeBookmarkedwalks < ActiveRecord::Migration
  def change
    create_table :bookmarkedwalks do |t|
      t.integer :walk_id
      t.integer :user_id
      t.string :relationship

      t.timestamps null: false
    end
  end
end
