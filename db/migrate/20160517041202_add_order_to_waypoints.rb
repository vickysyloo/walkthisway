class AddOrderToWaypoints < ActiveRecord::Migration
  def change
    add_column :waypoints, :order, :integer
  end
end
