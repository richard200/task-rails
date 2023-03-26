class CreateTodos < ActiveRecord::Migration[7.0]
  def change
    create_table :todos do |t|
      t.string :title, null: false
      t.text :descrption, null: false
      t.integer :status, default: 0, null: false
      t.integer :priority, default: 0, null: false
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
