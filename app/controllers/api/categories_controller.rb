class Api::CategoriesController < ApplicationController
    def index
        @categories = Category.all
        render json: @categories
      end
    
      def create
        @category = Category.create!(category_params)
        render json: @category
      end
    
      def show
        @category = Category.find(params[:id])
        render json: @category
      end
    
      def update
        @category = Category.find(params[:id])
        @category.update!(category_params)
        render json: @category
      end
    
      def destroy
        @category = Category.find(params[:id]).delete
        render status: :ok
      end
    
      private
      
      def category_params
        params.require(:category).permit(:name, :cat_type, :description, :image, :active)
      end
end
