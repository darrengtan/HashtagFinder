class SubmissionsController < ApplicationController
  def grab_data
    @hashtag = submission_params[:hashtag]
    @start = Time.parse(submission_params[:start]).to_i
    @end = Time.parse(submission_params[:end]).to_i
    @response = HTTParty.get("https://api.instagram.com/v1/tags/snow/media/recent?client_id=773edae87abe48c58d95ced3d6a750de&max_tag_id=1077768677110124880")
    fail
  end

  private
  def submission_params
    params.require(:submission).permit(:hashtag, :start, :end)
  end
end
