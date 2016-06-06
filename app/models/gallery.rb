class Gallery < ActiveRecord::Base
  belongs_to :walks
  mount_uploader :gallery, GalleryUploader
end
