class SubmissionsController < ApplicationController
  def new
  end

  def grab_data
    @hashtag = submission_params[:hashtag]
    @start = Time.parse(submission_params[:start]).to_i
    @end = Time.parse(submission_params[:end]).to_i
    fail
  end

  private
  def submission_params
    params.require(:submission).permit(:hashtag, :start, :end)
  end
end
