class CommentsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def show
    @comment = Comment.all
    render json: @comment, each_serializer: CommentSerializer
  end

  def create
    @comment = Comment.new(content: comment_params, user: User.first)

    if @comment.save
      render json: Comment.all
    else
      render json: @comment.errors
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:content)["content"]
  end
end
