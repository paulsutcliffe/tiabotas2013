class ActividadesController < InheritedResources::Base
  before_filter :authenticate_admin!, :except => [:index]
  def create
    create! { actividades_path }
  end

  def update
    update! { actividades_path }
  end

  def destroy
    destroy! { actividades_path }
  end
end
