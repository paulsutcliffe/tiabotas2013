require 'factory_girl'
require 'database_cleaner'

DatabaseCleaner.strategy = :truncation

DatabaseCleaner.clean

FactoryGirl.create :admin

12.times do
  FactoryGirl.create :actividad
end

12.times do
  FactoryGirl.create :cancion
end

12.times do
  FactoryGirl.create :contacto
end

12.times do
  FactoryGirl.create :slide
end
