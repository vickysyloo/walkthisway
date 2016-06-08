class DeletebookmarkedWalks < ActiveRecord::Migration
  def change
    drop_table 'bookmarkedwalks' if ActiveRecord::Base.connection.table_exists? 'bookmarkedwalks'
  end
end
