class Pet < ApplicationRecord
  belongs_to :user
  has_many :donations

  validates :name, :age, :cause, :goal, presence: true
end
