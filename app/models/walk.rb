class Walk < ActiveRecord::Base
  belongs_to :category
  belongs_to :user
  has_many :waypoints
  has_many :comments
  has_many :commenters, through: :comments, source: :user
  has_many :bookmarking_users, through: :bookmarked_walks, source: :user
  mount_uploader :picture, PictureUploader

  validates :city, presence: { message: "City is required" }
  validates :name, presence: { message: "Name of walk is required" }

  validates :description, presence: { message: "Description of walk is required" }
  # validates :picture, presence: { message: "Image of walk is required" }
  validate :need_two_waypoints
  validate :too_many_waypoints


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

  def waypoints_coord_formatted
    if self.waypoints
      self.waypoints.order(:order)
      # ordering by waypoints attribute :order
      waypt_hash = self.waypoints.map { |waypt| [waypt.latitude, waypt.longitude, waypt.address, waypt.description] }
    end
    return waypt_hash.to_json
  end

  def self.filter_by_distance(walk_array, coord_array)
    self.all.each do |walk| #iterate over all Walks in database
      if walk.waypoints.first.distance_from(coord_array) < 30
        walk_array << walk #push this walk into @walks array
      end
    end
  end

  def walk_startpoints(startpt_array)
      startpt_array << [self.waypoints.first.latitude, self.waypoints.first.longitude, self.waypoints.first.address, self.description]
  end

end
