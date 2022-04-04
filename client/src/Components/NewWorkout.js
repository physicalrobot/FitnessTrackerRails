
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import moment from 'moment';

import { RadioGroup, Radio } from 'react-radio-group'



function NewWorkout({ nework, setnework, dates, date, handleAddWorkout, handleAddDate }) {

    const [name, setName] = useState('');
    const [body, setBody] = useState('');
    const [group, setGroup] = useState("");
    const [currentDate, setCurrentDate] = useState("");
    const [checked, setChecked] = useState(false);

    function onDateCheckbox() {
        setCurrentDate(date.toLocaleDateString('en-us', { day: "numeric", year: "numeric", month: "short" }))
        setChecked(!checked)

    }


    function handleDateCheck() {

        if (dates.find(function (post, index) {
            if (post.name == currentDate)
                return true;
        }

        )) {
            return (console.log('hello'));
        }
        else {

            // handleAddDate(dateData)
            fetch("/days", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: currentDate,

                }),
            })
                .then((r) => r.json())
                .then(dateData => handleAddDate(dateData))
        }
    }


    function flipNew(){
        setnework(!nework)
    }


    function handleSubmit(e) {
        e.preventDefault();

        // fetches data and sets it to
        fetch("/workouts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                body: body,
                group: group
            }),
        })
            .then((r) => r.json())
            .then(workoutData => {
                handleAddWorkout(workoutData)
            })
            .then(checked ? handleDateCheck : console.log('not save in day'))

            flipNew()
    }




    return (
        <div>
            <form className="addform"
                onSubmit={handleSubmit}
            >

                <div className='NewWorkoutBackground'>

                    <input
                        className='AddWorkoutInputName'
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}


                    ></input><br></br>
            
                    <div className='AddToCategory'>


                        <input type="radio" value="cardio" name="category" onChange={(e) => setGroup(e.target.value)} /> Cardio
                        <input type="radio" value="arms" name="category" onChange={(e) => setGroup(e.target.value)} /> Arms
                        <input type="radio" value="core" name="category" onChange={(e) => setGroup(e.target.value)} /> Core
                        <input type="radio" value="yoga" name="category" onChange={(e) => setGroup(e.target.value)} /> Yoga



                    </div>

                    <textarea
                        className='AddWorkoutInputBody'
                        placeholder='Description'
                        type="text"
                        onChange={(e) => setBody(e.target.value)}
                        value={body}
                    ></textarea>


                    <div className='NewWorkoutButtons'>
                        <button type="submit" className="AddWorkoutButton" >Add<span></span>
                        </button>

                        <button onClick = {flipNew} className="CancelAddWorkoutButton">X<span></span>
                        </button>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default NewWorkout;