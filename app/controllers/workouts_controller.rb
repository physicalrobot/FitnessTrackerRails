class WorkoutsController < ApplicationController

    def index 
            workouts = Workout.all
            render json: workouts
    end

    def create 
        workouts = Workout.create(group: params[:group], body: params[:body], name: params[:name])
        render json: workouts

    end

    def update 
        workout = Workout.find(params[:id])
        workout.update(body: params[:body])
        render json: workout
    end


end
