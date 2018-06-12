Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  localized do
    root to: "pages#home"
    post "pages" => "pages#create"
  end

  unless Rails.application.config.consider_all_requests_local
    match "*unmatched_route", to: "application#routing_error", via: :all
  end
end
