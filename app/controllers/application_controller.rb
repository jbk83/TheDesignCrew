class ApplicationController < ActionController::Base
  include Concerns::WithRoutingError

  protect_from_forgery with: :null_session, except: :routing_error

  unless Rails.application.config.consider_all_requests_local
    rescue_from ActionController::RoutingError, with: :routing_error
  end
end
