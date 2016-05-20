class CreateFeaturedPictures < ActiveRecord::Migration
  def change
    create_table :featured_pictures do |t|

      t.timestamps null: false
    end
  end
end
