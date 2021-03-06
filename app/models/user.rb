class User < ActiveRecord::Base
  authenticates_with_sorcery!
  mount_uploader :icon, IconUploader

  authenticates_with_sorcery! do |config|
    config.authentications_class = Authentication
  end

  has_many :authentications, :dependent => :destroy
  accepts_nested_attributes_for :authentications
  has_many :walks
  has_many :categories, through: :walks


  validates :password, length: { minimum: 6 }, if: -> { new_record? || changes[:crypted_password] }
  validates :password, confirmation: true, if: -> { new_record? || changes[:crypted_password] }
  validates :password_confirmation, presence: true, if: -> { new_record? || changes[:crypted_password] }

  validates :email, uniqueness: true

  def has_linked_twitter?
    authentications.where(provider: 'twitter').present?
  end
end
