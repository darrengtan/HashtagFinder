require 'httparty'

class UrlApi
  include HTTParty
  base_uri 'https://api.instagram.com'
  default_params output: :json
  format :json

  API_URL = 'https://api.instagram.com/v1/tags/snow/media/recent?client_id=773edae87abe48c58d95ced3d6a750de&max_tag_id=1077768677110124880'

  def get_data
    get("/v1/tags/snow/media/recent?client_id=773edae87abe48c58d95ced3d6a750de&max_tag_id=1077768677110124880")
  end
end
