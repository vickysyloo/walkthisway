class WaypointsController < ApplicationController
  before_action :load_walks

  def index
    # if params[:search].present?
    #   @waypoints = Waypoint.near(params[:search], 50, :order => :distance)
    # else
      @waypoints = Waypoint.all
    # end
  end

  def new
    @waypoint = Waypoint.new
  end

  def show
    @waypoint = Waypoint.find(params[:id])
  end

  def create
    @waypoint = @walk.waypoints.build(waypoint_params)
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def waypoint_params
    params.require(:waypoint).permit(:name, :description, :address, :latitude, :longitude, :walk_id)
  end

  def load_walks
    @walk = Walk.find(params[:walk_id])
  end
  
end
