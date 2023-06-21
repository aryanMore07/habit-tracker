import React, { useContext } from 'react';
import './landingPage.css';
import InputHabitComponent from '../../components/InputHabit/InputHabitComponent';
import { HabitContext } from '../../contexts/habitContext';
import { useNavigate } from 'react-router';

const LandingComponent = () => {

    const { state } = useContext(HabitContext);
    const navigate = useNavigate();

    return (
        <div className='landing-component-div'>
            <div className='habits-div'>
                {
                    state?.habitData.length === 0 ? (<h1>No Habits so far, Please add habits</h1>)
                        :
                        (
                            state.habitData.map((habit) => {
                                const { id, habitName } = habit;
                                return (
                                    <di key={id} className='habit-div' onClick={() => {
                                       navigate(`/habit/${id}`)
                                    }}>
                                        <p><b>Habit Name:</b> {habitName}</p>
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
