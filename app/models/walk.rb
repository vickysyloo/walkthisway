class Walk < ActiveRecord::Base
  belongs_to :category
  belongs_to :user
  has_many :waypoints

  validate :need_two_waypoints
  validate :too_many_waypoints
  validates :name, presence: { message: "Name of walk is required" }
  validates :description, presence: { message: "Description of walk is required" }
  validates :picture, presence: { message: "Image of walk is required" }
  validates :city, presence: { message: "City is required" }

  accepts_nested_attributes_for :waypoints, reject_if: :all_blank

  def need_two_waypoints
    if self.waypoints.length < 2
      errors.add(:walk, "Walks need at least two waypoints.")
    end
  end

  def too_many_waypoints
    if self.waypoints.length > 8
      errors.add(:walk, "Walk is too complicated! Walk has a max number of 8 waypoints (this is a walk, not a hike, or a long and winding spiritual journey with many waypoints)")
    end
  end

  def waypoints_coord_array
    if self.waypoints
      self.waypoints.order(:order)
      # ordering by waypoints attribute :order
      coords = self.waypoints.map { |waypt| [waypt.latitude, waypt.longitude] }
    end
    return coords
  end



end
