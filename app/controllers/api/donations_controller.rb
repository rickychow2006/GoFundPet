class Api::DonationsController < ApplicationController

  def index 
    if logged_in? 
      donations = current_user.donations
      render json: donations
    else 
      render json: {
				error: "Login to view your donations."
      }
    end 
  end 

  def show 
    donation = Donation.find_by(id:params[:id])
    render json: donation
  end 

  def create 
    donation = Donation.new(donation_params)

    if donation.save 
      session[:donation_id] = donation.id
      render json: donation, status: :created 
    else 
      render json: {
				error: @donation.errors.full_messages.to_sentence
			}, status: :unprocessable_entity
    end 
  end 

  private 

  def donation_params 
    params.require(:donation).permit(:amount, :message, :pet_id, :user_id)
  end 
  
end
