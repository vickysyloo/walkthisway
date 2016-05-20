class Walk < ActiveRecord::Base
  belongs_to :category
  belongs_to :user
  has_many :waypoints
  has_many :pictures
  has_one :featured_picture

  validate :need_two_waypoints
  validates :name, presence: { message: "Name of walk is required" }
  validates :description, presence: { message: "Description of walk is required" }
  validates :picture, presence: { message: "Image of walk is required" }
  validates :city, presence: { message: "City is required" }

  accepts_nested_attributes_for :waypoints, reject_if: :all_blank
  accepts_nested_attributes_for :pictures

  mount_uploader :featured_picture, Featured_PictureUploader

  def need_two_waypoints
    if self.waypoints.length < 2
      errors.add(:walk, "Walks need at least two waypoints.")
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
