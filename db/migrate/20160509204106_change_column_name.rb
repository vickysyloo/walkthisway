class ChangeColumnName < ActiveRecord::Migration
  def change
    rename_column :waypoints, :path_id, :walk_id
  end
end
