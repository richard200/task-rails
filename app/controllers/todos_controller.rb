class TodosController < ApplicationController
    before_action :verify_auth


    def create 
     todo = user.todos.create(todo_params)
     if todo.valid? 
        app_response(status: :created, data: todo)
     else 
        app_response(status: :unprocessable_entity, data: todo.errors, message: 'failed')
     end
    end

    def update
        todo = user.todos.find(params [:id]).update(todo_params)
        if todo 
            app_response(data: {info: 'todo updated'})
        else 
            app_response(message: 'failed', data: {info: 'Something went wrong, could not update todo'}, status: :unprocessable_entity)
        end
    end

    def destroy 
       user.todos.find(params[:id]).destroy
        app_response(message: 'success', data: {info: 'todo deleted successfully'}, status: 204)
    end

    def index
        todos = user.todos.all 
        app_response(message: 'success', data: todos)
    end


    private 
    
    def todo_params
        params.permit(:title, :descrption, :status, :priority)
    end

end
