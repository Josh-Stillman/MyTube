class Api::V1::AlbumsController < ApplicationController

  def index
    @albums = Album.all
    render json: @albums
  end

  def show
    @album = Album.find(params[:id])
    render json: @album
  end

  def create

    @album = Album.create(album_params)
    render json: @album
  end

  def destroy
    @album = Album.find(params[:id])
    @album.destroy
    render json: "successfully deleted album"
  end


end

private

def album_params

  params.permit(:name, :link, :play_count, :image, :artist_id)

end
