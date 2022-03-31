class RoutinesController < ApplicationController

    def index 
        routines = Routine.all 
        json render: routines
    end

    def create 
        routines = Routine.create(name: params[:name], day_id: params[:day_id], workout_id: params[:workout_id] )
        render json: routines

    end

end
