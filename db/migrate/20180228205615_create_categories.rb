class CreateCategories < ActiveRecord::Migration[5.1]
  def change
    create_table :categories do |t|
      t.string :name
      t.string :cat_type
      t.string :description
      t.string :image
      t.boolean :active

      t.timestamps
    end
  end
end
