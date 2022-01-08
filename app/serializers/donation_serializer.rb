class DonationSerializer < ActiveModel::Serializer
  attributes :amount, :pet_id, :user_id
end 