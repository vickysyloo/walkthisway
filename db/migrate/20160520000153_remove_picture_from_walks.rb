class RemovePictureFromWalks < ActiveRecord::Migration
  def change
    remove_column :walks, :picture, :string
  end
end
