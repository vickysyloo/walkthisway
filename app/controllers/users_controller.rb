class UsersController < ApplicationController
  # before_action :edit_rights?, only: [:update, :edit]
  # before_filter :require_permission, only: :edit

  def new
    @user = User.new
  end

  def show
    @user = User.find(params[:id])
    @user_walks = @user.walks
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
    unless current_user == @user
      flash[:alert] = "You are not authorized. Currently logged in is #{current_user.username}."
      redirect_to root_url
    end
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

  # def edit_rights?
  #   @user = User.find(params[:id])
  #   redirect_to(root_path) unless current_user == @user
  # end

  # def require_permission
  #   if current_user != Walk.find(params[:id]).user
  #     redirect_to root_path
  #   else
  #     redirect_to edit_user_path
  #   end
  # end

end
