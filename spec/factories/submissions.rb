FactoryGirl.define do
  factory :submission do
    hashtag "snow"
    start_date "2015-09-17"
    end_date "2015-09-18"
    response HTTParty.get("https://api.instagram.com/v1/tags/snow/media/recent?client_id=#{ENV['CLIENT_ID']}&max_tag_id=1442473200&min_tag_id=1442559600").body
  end

  factory :bad_submission, class: Submission do
    hashtag "snow"
    start_date "2015-09-18"
    end_date "2015-09-17"
    response HTTParty.get("https://api.instagram.com/v1/tags/snow/media/recent?client_id=#{ENV['CLIENT_ID']}&max_tag_id=1442559600&min_tag_id=1442473200").body
  end
end
