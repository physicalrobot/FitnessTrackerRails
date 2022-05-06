class RoutinesController < ApplicationController

    def index 
        routines = Routine.all 
        render json: routines
    end

    def create 
        routines = Routine.create(name: params[:name], day_id: params[:day_id], workout_id: params[:workout_id], user_id: params[:user_id] )
        render json: routines
    end

    
    def destroy 
        routine = Routine.find(params[:id])
        routine.destroy 
        render json: routine
    end

    def show 
        routine = Routine.find(params[:id])
        render json: routine
    end


end
