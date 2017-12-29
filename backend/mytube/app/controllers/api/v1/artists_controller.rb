class Api::V1::ArtistsController < ApplicationController

  def index
    @artists = Artist.all
    render json: @artists, include: :albums
  end

  def show
    @artist = Artist.find(params[:id])
    render json: @artist, include: :albums
  end

end
