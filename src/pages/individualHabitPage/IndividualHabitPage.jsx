import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { HabitContext } from '../../contexts/habitContext';
import './individualHabitPage.css';

const IndividualHabitPage = () => {

    const { habitId } = useParams();
    const { state } = useContext(HabitContext);

    const {habitName, goal, repitations, startDate, timeOfDay} = state?.habitData.find(({id}) => id === habitId);

  return (
    <div className='individual-habit-div'>
        <div><p><b>Habit Name: </b>{habitName}</p></div>
        <div><p><b>Goal: </b>{goal}</p></div>
        <div><p><b>Repitations: </b>{repitations}</p></div>
        <div><p><b>StartDate: </b>{startDate}</p></div>
        <div><p><b>Time of Day: </b>{timeOfDay}</p></div>
        <div style={{display: 'flex', justifyContent: 'space-evenly', width: '15rem'}}><button className='btn btn-primary'>Edit</button><button className='btn btn-danger'>delete</button></div>
    </div>
  )
}

export default IndividualHabitPage
