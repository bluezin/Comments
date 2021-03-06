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

  def like_comment
    comment_id = params[:comment]["id"]
    comment = Comment.find_by(id: comment_id)
    like = comment.like + 1
    comment.update(like: like)

    render json: like
  end

  private

  def comment_params
    params.require(:comment).permit(:content)["content"]
  end
end
