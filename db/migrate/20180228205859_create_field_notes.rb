class CreateFieldNotes < ActiveRecord::Migration[5.1]
  def change
    create_table :field_notes do |t|
      t.string :title
      t.string :memo
      t.string :image
      t.string :tags
      t.string :year
      t.references :user, foreign_key: true
      t.references :category, foreign_key: true

      t.timestamps
    end
  end
end
