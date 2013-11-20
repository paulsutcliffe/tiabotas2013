class CreateActividades < ActiveRecord::Migration
  def change
    create_table :actividades do |t|
      t.string :foto

      t.timestamps
    end
  end
end
