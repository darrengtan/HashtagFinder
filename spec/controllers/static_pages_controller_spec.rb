require 'rails_helper'

RSpec.describe StaticPagesController, type: :controller do
  it "renders root template" do
    get :root
    expect(response).to render_template :root
  end
end
