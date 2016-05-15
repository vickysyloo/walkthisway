Rails.application.routes.draw do
  root "pages#home"

  resources :categories, only: [:index, :show]

  resources :walks do
    resources :waypoints
  end

  resources :sessions, only: [:new, :create, :destroy]
  get '/log_in', to: 'sessions#new', as: :log_in
  delete '/log_out', to: 'sessions#destroy', as: :log_out

  post "oauth/callback" => "oauths#callback"
  get "oauth/callback" => "oauths#callback" # for use with Facebook
  get "oauth/:provider" => "oauths#oauth", :as => :auth_at_provider

  resources :users, only: [:new, :create, :update, :destroy] do
    member do
      get :activate
    end
  end
end
