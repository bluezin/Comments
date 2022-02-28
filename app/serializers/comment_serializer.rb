class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :created_at, :updated_at, :like

  belongs_to :user
end
