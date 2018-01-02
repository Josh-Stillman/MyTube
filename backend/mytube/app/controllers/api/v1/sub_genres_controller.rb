class Api::V1::SubGenresController < ApplicationController

  def index
    @subGenres = SubGenre.all
    render json: @subGenres, include: :artists
  end

  def show
    @subGenre = SubGenre.find(params[:id])
    render json: @subGenre, include: :artists
  end

  def create
    @subGenre= SubGenre.create(sub_genre_params)
    render json: @subGenre
  end
end

private

def sub_genre_params

  params.permit(:name, :category_id, :genre_id, :sub_genre_id)

end
