import React, { useContext } from 'react';
import './archiveComponent.css';
import { HabitContext } from '../../contexts/habitContext';
import { useNavigate } from 'react-router';

const ArchiveComponent = () => {
    const { state, dispatch } = useContext(HabitContext);
    const navigate = useNavigate();
    return (
        <div className='archive-div'>
            {state.archiveHabits.length === 0 && (<h1 style={{ textAlign: 'center' }}>No Archives!</h1>)}
            <div className='archived-habits'>
                {
                    state?.archiveHabits.map((habit) => {
                        const { id, habitName, goal, repitations, startDate, timeOfDay } = habit;
                        return (
                            <div className='archive-babit' key={id}>
                                <div><p><b>Habit Name: </b>{habitName}</p></div>
                                <div><p><b>Goal: </b>{goal}</p></div>
                                <div><p><b>Repitations: </b>{repitations}</p></div>
                                <div><p><b>StartDate: </b>{startDate}</p></div>
                                <div><p><b>Time of Day: </b>{timeOfDay}</p></div>
                                <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '18rem' }}>
                                    <button className='btn btn-danger' onClick={() => {
                                        dispatch({ type: 'DELETE_HABIT', payload: id })
                                        navigate('/');
                                    }}>delete</button>
                                    <button className='btn btn-danger' onClick={() => {
                                        dispatch({ type: 'REMOVE_FROM_ARCHIVE_HABIT', payload: id })
                                    }}>Remove to Archive</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ArchiveComponent
