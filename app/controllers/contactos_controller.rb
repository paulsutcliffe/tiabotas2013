class ContactosController < InheritedResources::Base
  before_filter :authenticate_admin!, :except => [:new,:create]
  def index
    @contactos = Contacto.order('created_at DESC')
  end
end
