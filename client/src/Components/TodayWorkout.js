import React, { useState } from 'react';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';


function TodayWorkout({ date, workouts, setCatagorizedWorkouts, catagorizedworkouts, listwrkout, bookie, handleDeleteRoutine, routines, user }) {
    const [routinecont, setRoutinecont] = useState([])
    const [id, setId] = useState(null)

    // const id = routines.map(x => x.id)

    const pp = catagorizedworkouts?.find(o => o.name === date.toLocaleDateString('en-us', { day: "numeric", year: "numeric", month: "short" }))?.routines


    console.log(pp)
    // var obj = catagorizedworkouts.filter(o => o.name === date.toLocaleDateString('en-us', { day: "numeric", year: "numeric", month: "short" }));

    let cloyster = pp?.filter(o => o.user_id === user.id);
    console.log(cloyster)
    // setRoutinecont(cloyster)
    // console.log(routinecont)

    
   //I have to filter through this array of routine ids to specify the one I want to delete. 
////////////////////////////

//need to specify the routine that I want to delete by routine id
    function handleDelete(workout) {

        var titty = (cloyster?.filter((routine) => (
            routine.workout.name === workout
            )))

        var routeid = titty.find((t) => t.id).id

        fetch(`/routines/${routeid}`, {
            method: "DELETE",
        }) 
        .then(fetch("/days")
            .then((r) => r.json())
            .then((wrk) => {
            setCatagorizedWorkouts(wrk)
        }))
        
     

        handleDeleteRoutine(routeid)


    }

    
    var bookie = listwrkout(catagorizedworkouts)

    //finding the user_id from the routines list
    let d = routines.filter(o => o.user_id === user.id)
    // let  userid = d[0].user_id
    // let t = routines.filter(o => o.workout_id === )
    // let  routineid = d[0].user_id

    // console.log(c)
    // console.log(catagorizedworkouts)
    console.log(bookie)



    return (
        <div className='TodayWorkout'>
            <div className='TodayW'>Workouts:</div>
            <p className='WorkoutDate'>Current selected date: <b>{moment(date).format('MMMM Do YYYY')}</b></p>


            <div className='TodaysWorkoutList'>

                {bookie?.map((workout) => (


                    <ul  className = 'ultoday' key={uuidv4()} >
                        <li className= 'todaylist'>
                            <p className='thelistofworkoutsintoday'>{workout}
                            </p>    
                  </li>
                  <button className='deleteroutinebutt' onClick={() => handleDelete(workout)}>x</button>
                    </ul>
                    
                ))}

            </div>


        </div>

    )
}

export default TodayWorkout;