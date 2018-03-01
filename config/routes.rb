Rails.application.routes.draw do
  namespace :api do
    get 'users/retrieve/:username', to: 'users#retrieve'
    resources :users do
      resources :field_notes
    end
    resources :categories do 
      resources :field_notes
    end
  end
end
