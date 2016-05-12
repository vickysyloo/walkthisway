class AddCityToWalks < ActiveRecord::Migration
  def change
    add_column :walks, :city, :string
  end
end
