class PagesController < ApplicationController
  def create
    email = request.params[:email]
    client = Client.where(email: email)

    if email.present? && client.blank?
      Client.create(email: email)
      flash.now[:success] = 'Vous avez bien été enregistré, merci de votre participation.'
    else
      flash.now[:warning] = 'Email déjà enregistré.'
    end
    render "/pages/home"
  end
end
