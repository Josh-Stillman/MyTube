class Api::V1::ArtistsController < ApplicationController

  def index
    @artists = Artist.all
    render json: @artists, include: :albums
  end

  def show
    @artist = Artist.find(params[:id])
    render json: @artist, include: :albums
  end

  def create
    @artist = Artist.create(artist_params)
    render json: @artist
  end

end

private

def artist_params

  params.permit(:name, :category_id, :genre_id, :sub_genre_id)

end
