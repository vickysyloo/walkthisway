class OauthsController < ApplicationController
  skip_before_filter :require_login

  # sends the user on a trip to the provider,
  # and after authorizing there back to the callback url.
  def oauth
    login_at(auth_params[:provider])
  end

  def callback
     provider = auth_params[:provider]
     if @user = login_from(provider)
       flash[:notice] = "Logged in using #{provider.titleize}!"
       redirect_to root_path
     else
       if logged_in?
         link_account(provider)
         redirect_to root_path
       else
         flash[:alert] = 'You are required to link your GitHub account before you can use this feature. You can do this by clicking "Link your Github account" after you sign in.'
         redirect_to login_path
       end
     end
   end

   def destroy
    provider = auth_params[:provider]
    authentication = current_user.authentications.find_by_provider(provider)
    if authentication.present?
      authentication.destroy
      flash[:notice] = "You have successfully unlinked your #{provider.titleize} account."
    else
      flash[:alert] = "You do not currently have a linked #{provider.titleize} account."
    end
    redirect_to root_path
  end

  private

  def link_account(provider)
    if @user = add_provider_to_user(user_id)
     @user.update_attribute(:twitter_login, @user_params[:user_id]['login'])
      flash[:notice] = "You have successfully linked your Twitter account."
    else
      flash[:alert] = "There was a problem linking your Twitter account."
    end
  end

  def auth_params
    params.permit(:user_id, :uid, :provider)
  end

end
