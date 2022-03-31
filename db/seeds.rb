# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "🌱 Seeding data..."

Workout.create([
    {
      name: "pull-ups",
      group:"arms",
      body:"A pull-up is an upper-body strength exercise. The pull-up is a closed-chain movement where the body is suspended by the hands and pulls up. As this happens, the elbows flex and the shoulders adduct and extend to bring the elbows to the torso.",
    },
    {
      name: "push-ups",
      group:"arms",
      body:"a conditioning exercise performed in a prone position by raising and lowering the body with the straightening and bending of the arms while keeping the back straight and supporting the body on the hands and toes"

    },
    {
      name: "Steady-State Cardio - Jogging",
      group:"cardio",
      body: "Running at a consistent pace for 25-30 mins a day, roughly 150 minutes a week."
    },
    {
      name: "Crunches",
      group:"core",
      body:"The crunch is one of the most popular abdominal exercises. When performed properly, it engages all the abdominal muscles but primarily it works the rectus abdominis muscle and the obliques."
    },
    {
      name: "Suryanamaskars",
      group:"yoga",
      body: "A set of 12 yoga positions, pefromed generally in the morning therefore the name translates to (sun salutations)."

    }
  ])
puts "✅ Done seeding!"
