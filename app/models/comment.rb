class Comment < ActiveRecord::Base
  belongs_to :user
  belongs_to :walk
    validates :walk_id, presence: true
    validates :comment, presence: true

  validate :comment_length

  def comment_length
    if self.comment == "" || self.comment == " "
      errors.add(:comment, 'comment empty')
    end
  end

end
