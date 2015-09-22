class Submission < ActiveRecord::Base
  include HTTParty
  base_uri 'https://api.instagram.com/v1/tags'
  default_params output: :json
  format :json

  validates :hashtag, :start_date, :end_date, :response, presence: true
  validate :end_after_start

  has_many :photos

  def end_after_start
    if end_date < start_date
      errors.add(:end_date, "must be after the start date")
    end
  end

  def self.get_data(tag, start_date, end_date)
    get(
      "/#{tag}/media/recent?client_id=#{ENV['CLIENT_ID']}&max_tag_id=#{Time.parse(start_date).to_i}&min_tag_id=#{Time.parse(end_date).to_i}"
    )
  end

  def self.get_next_page(url)
    get(url)
  end

  def parsed_response
    JSON.parse(self.response)
  end

  def next_page
    parsed_response["pagination"]["next_url"]
  end

  def collection_data
    parsed_response["data"]
  end
end
