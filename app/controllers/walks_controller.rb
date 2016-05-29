class WalksController < ApplicationController
  before_action :require_login, only: [:new, :create]
  before_filter :require_permission, only: [:edit, :destroy]

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
    @walk.user_id = current_user.id

    if @walk.save
      flash[:notice] = "Walk created!"
      redirect_to walk_path(@walk)
    else
      render :new
      flash.now[:alert] = 'failed'
    end
  end

  def update
    @walk = Walk.find(params[:id])

    if @walk.update_attributes(walk_params)
      redirect_to walk_url(@walk)
    else
      render edit_walk_url
    end
   end

   def edit
    @walk = Walk.find(params[:id])
   end

   def destroy
     @walk = Walk.find(params[:id])
     @walk.destroy

     redirect_to walks_url
   end

   def require_permission
     if current_user != Walk.find(params[:id]).user
       redirect_to walk_url
     end
   end

  private

  def walk_params
    params.require(:walk).permit(:city, :name, :description, :picture, :category_id, :user_id, waypoints_attributes: [:name, :description, :address, :longitude, :latitude, :order, :index])
  end

end
