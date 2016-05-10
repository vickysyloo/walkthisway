class Waypoint < ActiveRecord::Base
  belongs_to :walk
  validates :address, presence: true

  geocoded_by :address
  after_validation :geocode, :if => :address_changed?

  def address
    params[:address]
  end
end
