Rails.application.routes.draw do
  get 'like/aument'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "pages#index"

  # Un namespace, se usa cuando se quiera organizar grupos de controladores bajo un espacio de nombres
  # namespace :api do
  #   namespace :v1 do
  #     # only: solo genera rutas para las acciones dadas
  #     resources :comments, only: %i[create, update]
  #   end
  # end

  # comments
  get "/api/comments", to: "comments#show"
  post "/api/comments/create", to: "comments#create"

  # users
  get "/api/user", to: "users#show"

  # likes
  post "/api/like", to: "comments#like_comment"

end
