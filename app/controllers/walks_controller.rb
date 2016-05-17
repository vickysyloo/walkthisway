class WalksController < ApplicationController

  def index
    @walks = [] #define @walks as an empty array
      if params[:search] #if there is a search key in teh params hash (via ajax or full http request)
        # binding.pry
        @centerpoint = Geocoder.coordinates(params[:search])
        Walk.all.each do |walk| #iterate over all Walks in database
          if walk.waypoints.first.distance_from(params[:search]) < 30
            #if the first waypoint in the walk is within 30 miles of the search value
            @walks << walk #push this walk into @walks array
          end
        end
      else
        # if there is no search form (e.g. someone types in url)
        Walk.all #return all walks
      end

      if request.xhr?
        render @walks #if the request is sent via ajax, render @walks. otherwise, redirect to walks_path (per rails default)
      end

      respond_to do |format|
        format.html
        format.json { render json: @allwaypoints_js }
      end
  end

  def show
    @walk = Walk.find(params[:id])
    @centershow = @allwaypoints.first
    @allwaypoints = {coords: @walk.waypoints_coord_array}.to_json
    # binding.pry
    respond_to do |format|
      format.html
      format.json { render json: @allwaypoints}
      # binding.pry
    end
  end

  def new
    @walk = Walk.new
  end

  def create
    @walk = Walk.new(walk_params)

    if @walk.save
      flash[:notice] = "Walk created!"
      redirect_to walk_path(@walk)
    else
      flash.now[:alert] = "Failed"
      render :new
    end
  end

  def update
  end

  def edit
  end

  def destroy
  end

  private

  def walk_params
    params.require(:walk).permit(:city, :name, :description, :picture, :category_id, :user_id, waypoints_attributes: [:name, :description, :address, :longitude, :latitude, :order])
  end

end
