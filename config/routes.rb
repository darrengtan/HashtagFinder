Rails.application.routes.draw do
  get 'submissions' => 'submissions#new', as: :new
  post 'submissions/grab_data' => 'submissions#grab_data', as: :grab_data
end
