class BookmarkedWalk < ActiveRecord::Base
  belongs_to :user
  belongs_to :walk


  validates :user_id, presence: { message: "User ID required" }
  validates :walk_id, presence: { message: "Walk ID required" }
  validates :relationship, presence: { message: "Relation type required" }

  def self.totals(walk_id, relation)
    if self.where(:walk_id => walk_id, :relationship => relation)
      return self.where(:walk_id => walk_id, :relationship => relation).length
    else
      return 0
    end
  end

  def self.like?(walk_id, user_id, relation)
    if self.where(:walk_id => walk_id, :user_id => user_id, :relationship => relation) != []
      return true
    else
      return false
    end
  end

end
