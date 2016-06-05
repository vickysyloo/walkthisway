Rails.application.routes.draw do

  root "pages#home"

  resources :categories, only: [:index, :show]

  resources :walks do
    resources :waypoints
    resources :comments, only: [:show, :create, :destroy]
  end

get 'oath/oauth'
post "oauth/callback" => "oauths#callback"
get "oauth/callback" => "oauths#callback" # for use with Github, Facebook
get "oauth/:provider" => "oauths#oauth", :as => :auth_at_provider


  resources :user_sessions
  resources :users
  get 'login' => 'user_sessions#new', :as => :login
  post 'logout' => 'user_sessions#destroy', :as => :logout

  resources :users, only: [:show] do
    resources :walks, only: [:index, :show]
  end
end
