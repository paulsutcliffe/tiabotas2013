class CancionesController < InheritedResources::Base
  before_filter :authenticate_admin!, :except => [:index]
  def create
    create! { canciones_path }
  end

  def update
    update! { canciones_path }
  end

  def destroy
    destroy! { canciones_path }
  end
end
