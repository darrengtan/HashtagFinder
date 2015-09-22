class Api::SubmissionsController < ApplicationController
  def create
    @hashtag = submission_params[:hashtag]
    @start = submission_params[:start_date]
    @end = submission_params[:end_date]
    if params[:next_page]
      @response = Submission.get_next_page(params[:next_page])
      render :next_page
    else
      @response = Submission.get_data(@hashtag, @start, @end)
      @submission = Submission.new(submission_params)
      @submission.response = @response.body
      if @submission.save
        render :show
      else
        render json: @submission.errors.full_messages,
                       status: :unprocessable_entity
      end
    end
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
