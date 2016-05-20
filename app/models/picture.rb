class Picture < ActiveRecord::Base
  belongs_to :walks
  mount_uploader :picture, PictureUploader
end
