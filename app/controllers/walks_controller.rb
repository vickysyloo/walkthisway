class WalksController < ApplicationController
  before_action :require_login, only: [:new, :create]

  def index
    if params[:search_by_location].present?
      @walks = []
      @startpoints = []
      @searchedcity = params[:search_by_location]
      @centerpoint = Geocoder.coordinates(params[:search_by_location])
      Walk.all.each do |walk| #iterate over all Walks in database
        if walk.waypoints.first.distance_from(@centerpoint) < 30
          @walks << walk #push this walk into @walks array
        end
      end

    else
      @walks = []
      @startpoints = []
      @walks = Walk.where(city: 'Toronto, ON, Canada')
      @centerpoint = Geocoder.coordinates('Toronto, Ontario')
      @searchedcity = 'Toronto, Ontario';
    end

    if params[:search_by_category]
      @category = params[:search_by_category].to_i
      @walks = @walks.select{|walk| walk.category.id ==  @category}
    end

    if @walks != nil
      @walks.each do |walk|
        @startpoints << [walk.waypoints.first.latitude, walk.waypoints.first.longitude, walk.waypoints.first.address, walk.description]
      end
    end

    # if request.xhr?
    #   render @walks #if the request is sent via ajax, render @walks. otherwise, redirect to walks_path (per rails default)
    # end

    # respond_to do |format|
    #   format.html
    #   format.json { render json: @allwaypoints_js }
    # end
  end

  def new
    @walk = Walk.new
  end

  def show
    @walk = Walk.find(params[:id])
    @centershow = [@walk.waypoints.first.latitude, @walk.waypoints.first.longitude]
    @allwaypoints = @walk.waypoints_coord_formatted
    # binding.pry
    respond_to do |format|
      format.html
      format.json { render json: @allwaypoints}
      # binding.pry
    end
  end


  def create
    @walk = Walk.new(walk_params)
    if @walk.save
      flash[:notice] = "Walk created!"
      redirect_to walk_path(@walk)
    else
      render :new
      flash.now[:alert] = 'failed'
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
    params.require(:walk).permit(:city, :name, :description, :picture, :category_id, :user_id, waypoints_attributes: [:name, :description, :address, :longitude, :latitude, :order, :index])
  end

end
