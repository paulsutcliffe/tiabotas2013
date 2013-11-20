require 'factory_girl'
require 'database_cleaner'

DatabaseCleaner.strategy = :truncation

DatabaseCleaner.clean

FactoryGirl.create :admin

6.times do
  FactoryGirl.create :actividad
end

3.times do
  FactoryGirl.create :cancion
end

12.times do
  FactoryGirl.create :contacto
end

2.times do
  FactoryGirl.create :slide
end
