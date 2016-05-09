class WalksController < ApplicationController

  before_action :load_category

  def index
    @walks = Walk.all
  end

  def show
    @walk = Walk.find_by(params[:id])
  end

  def new
  end

  def create
    @walk = @category.walks.build(walk_params)
    @walk.user = current_user
  end

  def update
  end

  def edit
  end

  def destroy
  end

  private

  def walk_params
    params.require(:walk).permit(:name, :description, :picture, :category_id, :user_id)
  end

  def load_category
    @category = Category.find(params[:category_id])
  end
end
