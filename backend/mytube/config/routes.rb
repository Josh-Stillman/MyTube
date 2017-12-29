Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :artists, only: [:index, :show, :update, :delete]
      resources :categories, only: [:index, :show, :update, :delete]
      resources :genres, only: [:index, :show, :update, :delete]
      resources :sub_genres, only: [:index, :show, :update, :delete]
    end
  end
end
