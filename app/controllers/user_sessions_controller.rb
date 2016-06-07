class UserSessionsController < ApplicationController

  def new
    @user = User.new
    @gobbledegook = false
  end

  def create
    if @user = login(params[:email], params[:password])
      redirect_back_or_to root_path
    else
      render action: 'new'
    end
  end

  def destroy
    logout
    redirect_to root_path
  end
end
