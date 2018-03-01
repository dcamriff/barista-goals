class Api::UsersController < ApplicationController
    def index
        @users = User.all
        render json: @users
    end

    def show
        @render json: @user
    end

    def create
        @user = User.new(user_params)
          if @user.save
            render json: @user, status: :created, location: @user
          else
            render json: @user.errors, status: :unprocessable_entity
          end
    end

    def update
        if @user.update(user_params)
          render json: @user
        else
          render json: @user.errors, status: :unprocessable_entity
        end
    end

    def destroy
        @user.destroy
    end
    
    def retrieve
        @existing_user = User.where(username: params[:username])
        puts @existing_user
        render json: @existing_user
    end

    private
    def set_user
        @user = User.find(params[:id])
    end

    def user_params
        params.require(:user).permit(:username, :firstname, :lastname, :password, :email, :picture, :company, :year)
    end
    
end
