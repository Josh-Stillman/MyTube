class Api::V1::GenresController < ApplicationController

  def index
    @genres = Genre.all
    render json: @genres, include: :sub_genres
  end

  def show
    @genre = Genre.find(params[:id])
    render json: @genre, include: :sub_genres
  end

  def create
    @genre= Genre.create(genre_params)
    render json: @genre
  end
end

private

def genre_params

  params.permit(:name, :category_id)

end
