class ContactoMailer < ActionMailer::Base
  def mensaje_recibido(contacto)
    @contacto = contacto
    mail(to: 'info@tiabotas.com', subject: 'Mensaje desde la web', reply_to: contacto.email, from: 'info@tiabotas.com')
  end
end
