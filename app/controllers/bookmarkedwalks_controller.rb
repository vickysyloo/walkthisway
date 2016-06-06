class BookmarkedwalksController < ApplicationController

  def index
    @bookmarkedwalks = Bookmarkedwalk.where(user_id: current_user.id)
  end

  def new
    @bookmarkedwalks = Bookmarkedwalk.new
  end

  def create
    @bookmarkedwalk = Bookmarkedwalk.new(bookmarkedwalk_params)
    @bookmarkedwalk.user_id = current_user.id


    respond_to do |format|
      if @bookmarkedwalk.save
        format.html { redirect_to root_path, notice: 'like created successfully' }
        format.js {render partial: 'unlike_button'}
      else
        format.html { redirect_to root_path, alert: "there was an error"}
        format.js {
          redirect_to root_path, alert: "there was an error"
        }
      end
    end
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
    binding.pry
    @bookmarkedwalk = Bookmarkedwalk.find(params[:id])
    @bookmarkedwalk.destroy
    redirect_to walk_path(@walk)
  end

private
  def bookmarkedwalk_params
    params.require(:bookmarkedwalk).permit(:user_id, :walk_id, :relationship)
  end


end
