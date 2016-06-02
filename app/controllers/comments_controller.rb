class CommentsController < ApplicationController

  def create
    @comment = @walk.comments.build(comment_params)
    @comment.user = current_user
    respond_to do |format|
      if @comment.save
        format.html { redirect_to walk_path(@walk.id), notice: 'comment created successfully' }
        format.js {}
      else
        format.html { render 'walks/show', alert: "there was an error"}
        format.js {}
      end
    end
  end
  #
  # def edit
  #   @comment = Comment.find(params[:id])
  # end
  #
  # def update
  #   if @comment.update_attributes(comment_params)
  #     flash[:alert] = "Comment updated!"
  #     redirect_to walks_show_path(params[:walk_id])
  #   else
  #     render :edit
  #   end
  #
  # end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    redirect_to walks_show_path(params:[walk_id])
  end

private

  def comment_params
    params.require(:user).permit(:user_id, :walk_id, :comment)
  end

end
