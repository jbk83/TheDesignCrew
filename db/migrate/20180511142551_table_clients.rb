class TableClients < ActiveRecord::Migration[5.1]
  def change
    create_table :clients
    add_column :clients, :email, :string
  end
end
