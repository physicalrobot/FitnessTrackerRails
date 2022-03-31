class DaysController < ApplicationController

  def index 
    @days = Day.all
    render json: @days, include: [{ :routines => { :include => :workout , except: [:workout_id, :day_id, :created_at, :updated_at] }}]
  end

  def create 
    day = Day.create(name: params[:name])
    render json: day
  end

end
