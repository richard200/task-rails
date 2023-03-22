class UsersController < ApplicationController

    def register
        user = User.create(user_params)
        if user.valid?
            app_response( message: "You have been registered successfully", status: :created, data: user )
        else
            app_response( message: "Something went wrong with your registration", status: :unprocessable_entity, data: users.errors)

        end
    end

    private
    def user_params
        params.permit(:username, :email, :password)
    end


end
