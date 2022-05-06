class User < ApplicationRecord
    has_secure_password
    has_many :routines
    has_many :workouts, through: :routines 
    has_many :days, through: :routines
    validates :username, presence: true, uniqueness: true

end
