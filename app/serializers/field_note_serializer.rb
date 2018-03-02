class FieldNoteSerializer < ActiveModel::Serializer
  attributes :id, :title, :memo, :image, :tags, :year, :user_id, :category_id, :user, :category 
end
