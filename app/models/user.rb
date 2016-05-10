class User < ActiveRecord::Base
  authenticates_with_sorcery!

  has_many :walks
  has_many :categories, through: :walks
end
