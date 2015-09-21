class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.integer :submission_id, null: false
      t.string :instagram_link, null: false
      t.string :instagram_username, null: false
      t.string :media_link, null: false
      t.timestamps null: false
    end
  end
end
