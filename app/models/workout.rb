class Workout < ApplicationRecord
    has_many :routines
    has_many :days, through: :routines
end
