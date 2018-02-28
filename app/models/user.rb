class User < ApplicationRecord
    has_many :field_notes, dependent: :destroy
    has_many :categories, through: :field_notes
end
