class Routine < ApplicationRecord
    belongs_to :workout
    belongs_to :day
    belongs_to :user

end
