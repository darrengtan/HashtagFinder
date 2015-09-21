class Api::SubmissionsController < ApplicationController
  def create
    @hashtag = submission_params[:hashtag]
    @start = submission_params[:start_date]
    @end = submission_params[:end_date]
    @response = Submission.get_data(@hashtag, @start, @end)
    @submission = Submission.new(submission_params)
    @submission.response = @response.body
    return @response.body
    # if @submission.save
    #   fail
    #   render :show
    # else
    #   fail
    #   render json: @submission.errors.full_messages,
    #                  status: :unprocessable_entity
    # end
  end

  def index
    @submissions = Submission.all
  end

  def show
    @submission = Submission.find(params[:id])
  end

  private
  def submission_params
    params.require(:submission).permit(:hashtag, :start_date, :end_date)
  end
end
