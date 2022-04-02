class Workout < ApplicationRecord
    has_many :routines, dependent: :destroy
    has_many :days, through: :routines, dependent: :destroy
end
