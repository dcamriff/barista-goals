Rails.application.routes.draw do
  namespace :api do
    get 'users/retrieve/:username', to: 'users#retrieve'
    resources :users do
      resources :field_notes
    end
    resources :categories do 
      resources :field_notes
    end

    resources :field_notes

    # custom
    # get '/field_notes', to: ''
  end

end
