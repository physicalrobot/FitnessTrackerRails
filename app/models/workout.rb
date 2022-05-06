class Workout < ApplicationRecord
    has_many :routines, dependent: :destroy
    has_many :days, through: :routines, dependent: :destroy

    
    # def self.backwardsorder
    #     Workout.order(name: :desc)
    # end



    # def self.whereis(p)
    #     Workout.find_by(name: p)
    # end


    def self.arms
        Workout.where(group: "arms").order(:name).limit(5)
    end

end
