class BookmarkedWalksController < ApplicationController

  def index
    @bookmarked_walks = BookmarkedWalk.where(user_id: current_user.id)
  end

  def new
    @bookmarked_walks = BookmarkedWalk.new
  end

  def create
    @bookmarkedWalk = BookmarkedWalk.new(bookmarkedWalk_params)
    @bookmarkedWalk.user_id = current_user.id
    respond_to do |format|
      if @bookmarkedWalk.save
        format.html { redirect_to root_path, notice: 'like created successfully' }

      else
        format.html { redirect_to root_path, alert: "there was an error"}

  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy

  end



    def create

        end
      end
    end


    def destroy
      @walk_relation = BookmarkedWalk.find(params[:id])
      @walk_relation.destroy
      redirect_to root_path
    end

  private
    def bookmarkedWalk_params
      params.require(:bookmarked_walk).permit(:user_id, :walk_id, :relationship)
    end

end
