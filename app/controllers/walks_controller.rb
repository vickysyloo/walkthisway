class WalksController < ApplicationController

  def index
    @walks = []
    if params[:search]
      Walk.all.each do |walk|
        if walk.waypoints.first.distance_from(params[:search]) < 30
          @walks << walk
        # Walk.city.near(params[:search], 50)
        #Walk.where("LOWER(city) LIKE LOWER(?)", "#{params[:search]}")
        # puts "params hash is #{params[:search]}"
        # puts "@walks = #{@walks}"
        end
      end

    else
      # binding.pry
      Walk.all
    end
    # binding.pry
    if request.xhr?
      render @walks
    end

  end

  def show
    @walk = Walk.find(params[:id])
  end

  def new
    @walk = Walk.new
  end

  def create
    @walk = Walk.new(walk_params)
    @walk[:city] = @walk.waypoints.first.address
    if @walk.save
      flash[:notice] = "Walk created!"
      redirect_to walk_path(@walk)
    else
      flash[:alert] = "Failed"
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
    params.require(:walk).permit(:city, :name, :description, :picture, :category_id, :user_id, waypoints_attributes: [:name, :description, :address, :longitude, :latitude])
  end

end
