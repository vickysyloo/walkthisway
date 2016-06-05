class AddCommentTable < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :walk_id
      t.integer :user_id
      t.string :comment

      t.timestamps null: false
    end
  end
end
