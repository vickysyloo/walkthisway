class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :username
      t.string :email
      t.string :password_digest
      t.string :icon
      t.string :details
      t.string :location

      t.timestamps null: false
    end
  end
end
