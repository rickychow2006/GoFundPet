class Api::PetsController < ApplicationController
  
  def index 
    if logged_in?
      pets =  Pet.all 
      render json: pets
    else 
      render json: {
        error: "Login to view pets."
      }
    end 
  end 

  def show 
    @pet = Pet.find_by(id: params[:id])
    render json: pet
  end 
end