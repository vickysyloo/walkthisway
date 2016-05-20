class FeaturedPicture < ActiveRecord::Base
  belongs_to :walk
  mount_uploader :featured_picture, Featured_PictureUploader
end
