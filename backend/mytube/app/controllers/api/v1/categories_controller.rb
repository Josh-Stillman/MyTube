class Api::V1::CategoriesController < ApplicationController

  def index
    @categories = Category.all
    render json: @categories, include: :genres
  end

  def show
    @category = Category.find(params[:id])
    render json: @category, include: :genres
  end

  def create
    @category= Category.create(category_params)
    render json: @category
  end
end

private

def category_params

  params.permit(:name)

end
