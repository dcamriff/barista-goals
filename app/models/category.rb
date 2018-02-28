class Category < ApplicationRecord
    has_many :field_notes, dependent: :destroy
    has_many :users, through: :field_notes
end
