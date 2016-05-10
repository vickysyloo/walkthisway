class ChangeCategoryColumnName < ActiveRecord::Migration
  def change
    rename_column :categories, :type, :theme
  end
end
