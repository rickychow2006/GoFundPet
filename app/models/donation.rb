class Donation < ApplicationRecord
  belongs_to :pet
  belongs_to :user 

  validates :amount, :message, presence:true
end
