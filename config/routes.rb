Rails.application.routes.draw do
  namespace :api do 
    resources :donations
    resources :pets
    resources :users
  end 

  mount ActionCable.server, at: '/cable'

  post "/signup", to: "api/users#create"
  post "/login", to: "api/sessions#create"
  delete "/logout", to: "api/sessions#destroy"
  get '/me', to: "api/users#show"

end
