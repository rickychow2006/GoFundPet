class Donation < ApplicationRecord
  belongs_to :pet
  belongs_to :user 

  validates :amount, presence:true
end
