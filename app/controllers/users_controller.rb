class UsersController < ApplicationController
  def new
    @user = User.new
    @gobbledegook  = false
  end

  def show
    @user = User.find(params[:id])
  end

  def create
    @user = User.new(user_params)
    if @user.save
      # UserMailer.welcome(@user).deliver_later
      flash[:notice] = "Successfully signed up!"
      auto_login(@user)
      redirect_to root_path
    else
      flash[:alert] = "User not created."
      render :new
    end
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])

    if @user.update_attributes(user_params)
      flash[:alert] = "Information updated!"
      redirect_to root_path
    else
      render :edit
    end

  end

  def destroy
    @user = User.find(params[:id])

    @user.destroy
    redirect_to root_path
  end

private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :username, :email, :icon, :details, :location, :password, :password_confirmation, :authentications_attributes)
  end

end
