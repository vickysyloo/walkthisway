class AddtwitterLogintousers < ActiveRecord::Migration
  def change
    add_column :users, :twitter_login, :string
  end
end
