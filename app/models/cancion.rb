class Cancion < ActiveRecord::Base
  attr_accessible :link
  auto_html_for :link do
    soundcloud
  end
end
