class DeletebookmarkedWalks < ActiveRecord::Migration
  def change
    drop_table(:bookmarkedwalks, if_exists: true)
  end
end
