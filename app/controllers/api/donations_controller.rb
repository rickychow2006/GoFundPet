class Api::DonationsController < ApplicationController

  def index 
      render json: Donation.all
  end 

  def show 
    donation = Donation.find_by(id:params[:id])
    render json: donation
  end 

  def create 
    donation = Donation.new(donation_params)

    if donation.save 
      render json: donation, status: :created 
    else 
      render json: {
				error: @donation.errors.full_messages.to_sentence
			}, status: :unprocessable_entity
    end 
  end 

  private 

  def donation_params 
    params.require(:donation).permit(:amount, :pet_id, :user_id)
  end 

end
