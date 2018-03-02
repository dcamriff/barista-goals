class CategoriesSerializer < ActiveModel::Serializer
  attributes :id, :name, :cat_type, :description, :image, :active, :field_notes, :users
end
