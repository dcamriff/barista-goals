class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :firstname
      t.string :lastname
      t.string :password
      t.string :email
      t.string :picture
      t.string :company
      t.integer :year

      t.timestamps
    end
  end
end
