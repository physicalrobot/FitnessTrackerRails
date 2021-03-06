Rails.application.routes.draw do

  resources :workouts
  resources :days
  resources :routines
  # resources :day_workout 

  get "/backwards", to: "workouts#backorder"

  get "/arms", to: "workouts#arms"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
