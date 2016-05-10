class Walk < ActiveRecord::Base
  belongs_to :category
  belongs_to :user
  has_many :waypoints

  accepts_nested_attributes_for :waypoints, reject_if: :all_blank
end
