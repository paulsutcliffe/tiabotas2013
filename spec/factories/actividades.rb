# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :actividad do
    foto { Rack::Test::UploadedFile.new(File.join(Rails.root,'spec','support','images','foto.jpg'))}
  end
end
