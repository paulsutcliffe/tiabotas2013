ActionMailer::Base.smtp_settings = {
  :address              => 'smtp.gmail.com',
  :port                 => 587,
  :domain               => 'tiabotas.com',
  :user_name            => 'info@tiabotas.com',
  :password             => 'info2012',
  :authentication       => 'plain',
  :enable_starttls_auto => true
}
