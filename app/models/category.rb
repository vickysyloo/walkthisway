class Category < ActiveRecord::Base
  has_many :walks
  has_many :users, through: :walks
  has_many :waypoints, through: :walks
end
