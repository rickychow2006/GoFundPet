class PetSerializer < ActiveModel::Serializer
	attributes :name, :age, :image, :cause, :goal, :id, :donations
end 