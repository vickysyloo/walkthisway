Rails.application.routes.draw do

  root "pages#home"

  resources :categories, only: [:index, :show]

  resources :walks do
    resources :waypoints
    resources :comments, only: [:show, :create, :destroy]
  end



  resources :user_sessions
  resources :users
  get 'login' => 'user_sessions#new', :as => :login
  post 'logout' => 'user_sessions#destroy', :as => :logout

  resources :users, only: [:show] do
    resources :walks, only: [:index, :show]
    resources :bookmarked_walks
  end
end
