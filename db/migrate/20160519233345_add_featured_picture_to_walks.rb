class AddFeaturedPictureToWalks < ActiveRecord::Migration
  def change
    add_column :walks, :featured_picture, :string
  end
end
