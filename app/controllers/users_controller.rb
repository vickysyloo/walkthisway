class UsersController < ApplicationController
  skip_before_action :require_login, only: [:new, :create]
  
  def new
    @user = User.new
  end

  def show
    @user = User.find(params[:id])
  end

  def create
    @user = User.new(user_params)
    @user.name = params[:user][:name].capitalize

    if @user.save
      # UserMailer.welcome(@user).deliver_later
      if login(params[:email], params[:password])
        flash[:alert] = "Successfully signed in!"
        redirect_to root_path
      else
        render :new
      end
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
    params.require(:user).permit(:first_name, :last_name, :username, :email, :icon, :details, :location, :password, :password_confirmation)
  end

end
