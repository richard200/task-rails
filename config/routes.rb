Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  #user routes
  post '/users/register', to: 'users#register'
  post '/users/login', to: 'users#login'
  get '/users/login/check', to: 'users#check_login'
  delete '/users/logout', to: 'users#logout'

  #todos routes
  get '/todos', to: 'todos#index'
  post '/todos/create', to: 'todos#create'
  put '/todos/update/:id', to: 'todos#update'
  delete '/todos/delete/:id', to: 'todos#destroy'

  #verify auth
  get '/verify', to: 'application#verify_auth'
end
