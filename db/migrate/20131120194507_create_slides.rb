class CreateSlides < ActiveRecord::Migration
  def change
    create_table :slides do |t|
      t.string :link
      t.string :imagen

      t.timestamps
    end
  end
end
