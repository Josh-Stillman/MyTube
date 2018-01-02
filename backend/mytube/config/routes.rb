Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :artists, only: [:index, :show, :create, :update, :destroy]
      resources :categories, only: [:index, :show, :create, :update, :destroy]
      resources :genres, only: [:index, :show, :create, :update, :destroy]
      resources :sub_genres, only: [:index, :show, :create, :update, :destroy]
      resources :albums, only: [:index, :show, :create, :update, :destroy]

    end
  end
end
