class UserSessionsController < ApplicationController

  def new
    @user = User.new
    @gobbledegook = true
  end

  def create
    if @user = login(params[:email], params[:password])
      flash.now[:success] = "You are now logged in."
      redirect_back_or_to root_path
    else
      flash.now[:alert] = 'Login failed'
      render action: 'new'
    end
  end

  def destroy
    logout
    redirect_to(:root, notice: 'Logged out!')
  end
end
