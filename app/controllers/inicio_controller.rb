class InicioController < ApplicationController
  def index
    @slides = Slide.all
  end
end
