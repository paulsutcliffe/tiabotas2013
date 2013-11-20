class Actividad < ActiveRecord::Base
  attr_accessible :foto

  mount_uploader :foto, ImagenUploader
end
