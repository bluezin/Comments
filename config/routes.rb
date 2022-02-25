Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "pages#index"

  # Un namespace, se usa cuando se quiera organizar grupos de controladores bajo un espacio de nombres
  # namespace :api do
  #   namespace :v1 do
  #     # only: solo genera rutas para las acciones dadas
  #     resources :comments, only: %i[create, update]
  #   end
  # end

  get "/api/comments", to: "comments#show"
end
