import React, { useState } from 'react';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';


function TodayWorkout({ date, workouts, catagorizedworkouts, listwrkout, bookie, handleDeleteRoutine, routines }) {

    const id = routines.map(x => x.id)

    console.log(catagorizedworkouts)
    

   //I have to filter through this array of routine ids to specify the one I want to delete. 
   console.log(id)
////////////////////////////


    function handleDelete() {
        fetch(`/routines/${id}`, {
            method: "DELETE",
        })
        
        fetch("/days")
        .then((r) => r.json())
        // .then((wrk) => {
        //     setCatagorizedWorkouts(wrk)
        // });
        handleDeleteRoutine(id)
    }


    var bookie = listwrkout(catagorizedworkouts)

    console.log(bookie)



    return (
        <div className='TodayWorkout'>
            <div className='TodayW'>Workouts:</div>
            <p className='WorkoutDate'>Current selected date: <b>{moment(date).format('MMMM Do YYYY')}</b></p>


            <div className='TodaysWorkoutList'>



                {bookie?.map((workout) => (

                    <ul key={uuidv4()} >
                        <li>
                            <p className='thelistofworkoutsintoday'>{workout}
                            </p>
                            {/* {routines?.map((routine) => (
                                console.log(routine)
                                ))} */}
                  </li>

                        <button onClick={handleDelete}>"hell"</button>

                    </ul>
                ))}

            </div>


        </div>

    )
}

export default TodayWorkout;