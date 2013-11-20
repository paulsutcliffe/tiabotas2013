class CreateCanciones < ActiveRecord::Migration
  def change
    create_table :canciones do |t|
      t.string :link

      t.timestamps
    end
  end
end
