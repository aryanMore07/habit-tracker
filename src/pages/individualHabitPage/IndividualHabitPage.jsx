import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router'
import { HabitContext } from '../../contexts/habitContext';
import './individualHabitPage.css';

const IndividualHabitPage = () => {

    const { habitId } = useParams();
    const { state, dispatch } = useContext(HabitContext);
    const {id ,habitName, goal, repitations, startDate, timeOfDay} = state?.habitData.find(({id}) => id === habitId);
    const navigate = useNavigate();
  return (
    <div className='individual-habit-div'>
        <div><p><b>Habit Name: </b>{habitName}</p></div>
        <div><p><b>Goal: </b>{goal}</p></div>
        <div><p><b>Repitations: </b>{repitations}</p></div>
        <div><p><b>StartDate: </b>{startDate}</p></div>
        <div><p><b>Time of Day: </b>{timeOfDay}</p></div>
        <div style={{display: 'flex', justifyContent: 'space-evenly', width: '18rem'}}>
        <button className='btn btn-primary'>Edit</button>
        <button className='btn btn-danger' onClick={() => {
          dispatch({type: 'DELETE_HABIT', payload: id})
          navigate('/');
        }}>delete</button>
        <button className='btn btn-warning' onClick={() => {
          dispatch({type: 'ARCHIVE_HABIT', payload: id})
        }}>Add to Archive</button>
        </div>
    </div>
  )
}

export default IndividualHabitPage
