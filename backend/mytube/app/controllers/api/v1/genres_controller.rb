class Api::V1::GenresController < ApplicationController

  def index
    @genres = Genre.all
    render json: @genres, include: :sub_genres
  end

  def show
    @genre = Genre.find(params[:id])
    render json: @genre, include: :sub_genres
  end
end
