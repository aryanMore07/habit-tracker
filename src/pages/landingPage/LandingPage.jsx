import React, { useContext } from 'react';
import './landingPage.css';
import InputHabitComponent from '../../components/InputHabit/InputHabitComponent';
import { HabitContext } from '../../contexts/habitContext';

const LandingComponent = () => {

    const { state } = useContext(HabitContext);
    console.log(state.habitData);
    return (
        <div className='landing-component-div'>
            <div className='habits-div'>
                {
                    state?.habitData.length === 0 ? (<h1>No Habits so far, Please add habits</h1>)
                        :
                        (
                            state.habitData.map((habit) => {
                                const { id, habitName, repitations, goal, timeOfDay, startDate } = habit;
                                return (
                                    <di key={id} className='habit-div'>
                                        <div style={{display: 'flex'}}>
                                            <p><b>Name:</b> {habitName}</p>
                                            <p><b>Reps:</b> {repitations}</p>
                                        </div>
                                    </di>
                                )
                            })
                        )
                }
            </div>
            <div className='add-icon'>
                <InputHabitComponent />
            </div>
        </div>
    )
}

export default LandingComponent
