class Api::V1::CategoriesController < ApplicationController

  def index
    @categories = Category.all
    render json: @categories, include: :genres
  end

  def show
    @category = Category.find(params[:id])
    render json: @category, include: :genres
  end
end
