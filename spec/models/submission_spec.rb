require 'rails_helper'

RSpec.describe Submission, type: :model do
  let(:submission) { FactoryGirl.build(:submission) }
  let(:bad_submission) { FactoryGirl.build(:bad_submission) }

  describe "validation" do
    it "validates good submissions" do
      expect(submission).to be_valid
    end

    it "validates end date after start date" do
      expect(bad_submission).to be_invalid
    end
  end

  describe "Submission::methods" do
    it "gets appropriate data from request" do
      response = Submission.get_data("snow", "2015-09-17", "2015-09-18")
      expect(response.body).to include("pagination")
    end

    it "gets next page" do
      response = Submission.get_next_page(submission.next_page).body
      expect(response).to include("pagination")
      expect(response).to_not eq(submission.response)
    end
  end

  describe "Submission#methods" do
    it "returns next page url" do
      expect(submission.next_page).to include(submission.hashtag)
    end

    it "returns instagram data" do
      expect(submission.collection_data.length).to eq(20)
    end

  end
end
