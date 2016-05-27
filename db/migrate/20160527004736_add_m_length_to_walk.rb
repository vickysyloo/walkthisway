class AddMLengthToWalk < ActiveRecord::Migration
  def change
    add_column :walks, :length_in_m, :integer
  end
end
