class FixBookmarkedWalkColumnName < ActiveRecord::Migration
  def change
    rename_column :bookmarked_walks, :type, :relationship
  end
end
