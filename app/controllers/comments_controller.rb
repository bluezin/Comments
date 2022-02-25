class CommentsController < ApplicationController
  def show
    @comment = Comment.all
    render json: @comment, each_serializer: CommentSerializer
  end

  def create
    @comment = Comment.create(commet_arguments)
  end

  def update
    @comment = Comment.update(comment_arguments)
  end
end
