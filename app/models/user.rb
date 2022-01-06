class User < ApplicationRecord
  has_many :pets
	has_many :donations

  has_secure_password 
	validates :username, :password, presence: true
  validates :username, uniqueness: true

end
