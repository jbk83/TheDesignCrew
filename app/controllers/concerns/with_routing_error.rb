module Concerns
  module WithRoutingError
    extend ActiveSupport::Concern

    def routing_error
      respond_to do |format|
        format.html do
          path = Rails.root.join("app", "views", "errors", "not_found.html.erb")
          render file: path, status: :not_found
        end
        format.all { head :not_found }
      end
    end
  end
end
