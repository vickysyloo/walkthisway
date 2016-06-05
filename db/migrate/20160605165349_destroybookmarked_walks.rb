class DestroybookmarkedWalks < ActiveRecord::Migration
  def change
    drop_table(:bookmarked_walks, if_exists: true)
  end
end
