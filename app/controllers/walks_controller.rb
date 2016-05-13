class WalksController < ApplicationController

  def index
    @walks = if params[:search]
                Walk.where("LOWER(city) LIKE LOWER(?)", "#{params[:search]}")
             else
               Walk.all
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
