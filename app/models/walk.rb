class Walk < ActiveRecord::Base
  belongs_to :category
  belongs_to :user
  has_many :waypoints

  validate :need_two_waypoints
  validates :name, :description, :picture, :city, presence: {message: "You have a blank field"}

  accepts_nested_attributes_for :waypoints, reject_if: :all_blank

  def need_two_waypoints
    if self.waypoints.length < 2
      errors.add(:walk, "Walks need at least two waypoints.")
    end
  end
end
