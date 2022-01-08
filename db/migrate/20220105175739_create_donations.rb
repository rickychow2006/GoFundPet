class CreateDonations < ActiveRecord::Migration[6.1]
  def change
    create_table :donations do |t|
      t.integer :amount 
      t.integer :pet_id
      t.integer :user_id

      t.timestamps
    end
  end
end
