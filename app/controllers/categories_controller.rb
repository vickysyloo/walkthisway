class CategoriesController < ApplicationController
  def index
    @categories = Category.all
  end

  def new
  end

  def create
  end

  def show
    @category = Category.find_by(params[:id])

    @walks = @category.walks
  end

  def edit
  end

  def update
  end

  def destroy
  end
end
