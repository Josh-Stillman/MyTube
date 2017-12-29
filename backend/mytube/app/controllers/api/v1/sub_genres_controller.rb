class Api::V1::SubGenresController < ApplicationController

  def index
    @subGenres = SubGenre.all
    render json: @subGenres, include: :artists
  end

  def show
    @subGenre = SubGenre.find(params[:id])
    render json: @subGenre, include: :artists
  end
end
