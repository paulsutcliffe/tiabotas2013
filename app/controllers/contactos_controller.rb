#coding: utf-8
class ContactosController < InheritedResources::Base
  before_filter :authenticate_admin!, :except => [:new,:create]
  def index
    @contactos = Contacto.order('created_at DESC')
  end

  def create
    create! do |success, failure|
      success.html do
        ContactoMailer.mensaje_recibido(@contacto).deliver

        flash[:notice] = "Tu mensaje fue enviado con éxito"
        redirect_to new_contacto_path
      end
      failure.html do
        flash[:notice] = "No ha sido enviado el mensaje."
      end
    end
  end

end
