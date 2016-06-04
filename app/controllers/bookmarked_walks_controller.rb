class BookmarkedWalksController < ApplicationController
  before_action :load_walk

  def index
  end

  def new
  end

  def create
    @bookmarked_walk = current_user.create(bookmarked_walk_params)
    @bookmarked_walk.user_id = current_user.id
    @bookmarked_walk.walk_id = params[:walk_id]
    respond_to do |format|
      if @bookmarked_walk.save
        format.html { redirect_to walk_path(@walk.id), notice: 'comment created successfully' }
        format.js {@walk}
      else
        format.html { render 'walks/show', alert: "there was an error"}
        format.js {}
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

    end

  private
    def comment_params
      params.require(:bookmarked_walk).permit(:user_id, :walk_id)
    end
end
