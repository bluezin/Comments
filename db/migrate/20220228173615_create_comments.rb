class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.string :content
      t.belongs_to :user
      t.integer :like, :default => 0

      t.timestamps
    end
  end
end
