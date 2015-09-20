class CreateSubmissions < ActiveRecord::Migration
  def change
    create_table :submissions do |t|
      t.string :hashtag, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.text :response, null: false
      t.timestamps null: false
    end
  end
end
