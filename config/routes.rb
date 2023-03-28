Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

   # user
   post '/users/register', to: 'users#register'
   post '/users/login', to: 'users#login'
   delete '/users/logout', to: 'users#logout'
   get '/user/login/check', to: 'users#check_login_status'
   get '/users', to: 'users#index'
 
   # todos
   post '/todos/create', to: 'todos#create'
   put '/todos/:id', to: 'todos#update'
   delete '/todos/:id', to: 'todos#destroy'
   get '/todos', to: 'todos#index'

  #verify auth
  get '/verify', to: 'application#verify_auth'
end
