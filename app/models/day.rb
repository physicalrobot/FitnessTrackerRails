class Day < ApplicationRecord
    has_many :routines
    has_many :workouts, through: :routines 
end
