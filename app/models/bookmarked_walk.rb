class BookmarkedWalk < ActiveRecord::Base
  belongs_to :user
  belongs_to :walk


  validates :user_id, presence: { message: "User ID required" }
  validates :walk_id, presence: { message: "Walk ID required" }
  validates :type, presence: { message: "Relation type required" }
end
