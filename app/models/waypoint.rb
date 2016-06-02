class Waypoint < ActiveRecord::Base
  belongs_to :walk
  validates :address, presence: true
  validate :address_blank?

  geocoded_by :address
  after_validation :geocode, :if => :address_changed?

  def address_blank?
    if address.blank?
      errors.add(:address, "No address! Man!!!!")
    end
  end

  # def method_name VALIDATE ADDRESS HERE TBC
  #
  # end



end
