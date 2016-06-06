class WalksController < ApplicationController
  before_action :require_login, only: [:new, :create]
  before_filter :require_permission, only: [:edit, :destroy]


  def index
    binding.pry
    if params[:search_by_location].present?
      @walks = []
      @startpoints = []
      @searchedcity = params[:search_by_location]
      @centerpoint = Geocoder.coordinates(params[:search_by_location])
      Walk.filter_by_distance(@walks, @centerpoint)
    else
      @walks = []
      @startpoints = []
      @walks = Walk.where(city: 'Toronto, ON, Canada')
      @centerpoint = Geocoder.coordinates('Toronto, Ontario')
      @searchedcity = 'Toronto, Ontario';
    end

    # playing with geocoder
    # if params[:lat]
    #   binding.pry
    #   # @walks = []
    #   # Walk.filter_by_distance(@walks, @centerpoint)
    #   @walks = Walk.near([params[:lat], params[:lon]], 20, :units => :km)
    # end

    if params[:search_by_category]
      @category = params[:search_by_category].to_i
      @walks = @walks.select{|walk| walk.category.id ==  @category}
      if @walks != nil
        @walks.each {|walk| walk.walk_startpoints(@startpoints)}
      end
    end

    if params[:user_id]
      @walks = User.find(params[:user_id]).walks
    end

    if @walks != nil
      @walks.each {|walk| walk.walk_startpoints(@startpoints)}
    end

    if request.xhr?
      render @walks
    end
  end

  def new
    @walk = Walk.new
    # @walk.plot_waypoints(params[:waypoint])

    @allwaypoints = []
    if params[:waypoints]

      i=0
      params[:waypoints].each do |waypt|
        waypt = params[:waypoints][i.to_s]
        latlong = Geocoder.coordinates(waypt[:address])
        @allwaypoints.push([latlong[0], latlong[1], "", ""])
        i+=1
      end
    end

    respond_to do |format|
      format.html
      format.json { render json: @allwaypoints}
    end

  end

  def show
    @walk = Walk.find(params[:id])
    @centershow = [@walk.waypoints.first.latitude, @walk.waypoints.first.longitude]
    @allwaypoints = @walk.waypoints_coord_formatted

    if current_user
      @comment = @walk.comments.new
    end
    if @walk.comments.any?
      @comments = Comment.where(walk_id: params[:id])
    end

    respond_to do |format|
      format.html
      format.json { render json: @allwaypoints}
    end
  end


  def create
    @walk = Walk.new(walk_params)
    @walk.user_id = current_user.id

    if @walk.save
      redirect_to walk_path(@walk)
    else
      render :new
      flash.now[:alert] = 'failed'
    end
  end

  def update
    @walk = Walk.find(params[:id])
    if @walk.update(walk_params)
      redirect_to walk_url(@walk)
    else
      render :edit
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
    params.require(:walk).permit(:city, :name, :description, :picture, :category_id, :user_id, :longitude, :latitude, waypoints_attributes: [:name, :description, :address, :longitude, :latitude, :order, :index])
  end

end
