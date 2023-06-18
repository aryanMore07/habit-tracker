import React, { useContext, useState } from 'react';
import './inputHabitComponents.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import { MenuItem } from '@mui/material';
import { HabitContext } from '../../contexts/habitContext';
import { v4 as uuidv4 } from 'uuid';


const InputHabitComponent = () => {

    const [open, setOpen] = useState(false);
    const [habitName, setHabitName] = useState('');
    const [repitations, setRepitaions] = useState('');
    const [goal, setGoal] = useState('');
    const [time, setTime] = useState('');
    const [startDate, setStartDate] = useState('');
    const { state, dispatch } = useContext(HabitContext);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const dispatchData = {
        id: uuidv4(),
        habitName: habitName,
        repitations: repitations,
        goal: goal,
        timeOfDay: time,
        startDate: startDate
    }

    const submitInfo = () => {
        dispatch({ type: 'ADD_HABIT', payload: dispatchData })
        setOpen('');
        setHabitName('');
        setRepitaions('');
        setGoal('');
        setTime('');
        setStartDate('');
    }

    return (
        <>
            <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
                <AddIcon />
            </Fab>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New  Habit</DialogTitle>
                <DialogContent style={{ padding: '15px' }}>
                    {/* <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText> */}
                    <Box
                        sx={{
                            width: 500,
                            maxWidth: '100%',
                        }}
                    >
                        <TextField fullWidth label="Name" id="fullWidth" onChange={(event) => {
                            setHabitName(event.target.value);
                        }} />

                        <div className='dropdowns'>
                            <TextField
                                select
                                label="Repeat"
                                helperText="Please select repetition"
                                variant="filled"
                                onChange={(event) => {
                                    setRepitaions(event.target.value)
                                }}
                            >
                                <MenuItem value='Daily'>Daily</MenuItem>
                                <MenuItem value='Monday'>Monday</MenuItem>
                                <MenuItem value='Tuesday'>Tuesday</MenuItem>
                                <MenuItem value='Wednesday'>Wednesday</MenuItem>
                                <MenuItem value='Thrusday'>Thrusday</MenuItem>
                                <MenuItem value='Friday'>Friday</MenuItem>
                                <MenuItem value='Saturday'>Saturday</MenuItem>

                            </TextField>
                            <TextField
                                select
                                label="Goal"
                                variant="filled"
                                helperText="Please select your goal"
                                onChange={(event) => {
                                    setGoal(event.target.value)
                                }}
                            >
                                <MenuItem value='1 times daily'>1 times daily</MenuItem>
                                <MenuItem value='2 times daily'>2 times daily</MenuItem>
                                <MenuItem value='3 times daily'>3 times daily</MenuItem>

                            </TextField>
                        </div>
                        {/* Second dropdown div  */}
                        <div className='dropdowns'>
                            <TextField
                                id="filled-select-currency"
                                select
                                label="TIME OF DAY"
                                helperText="Please select repetition"
                                variant="filled"
                                onChange={(event) => {
                                    setTime(event.target.value)
                                }}
                            >
                                <MenuItem value='Morning'>Morning</MenuItem>
                                <MenuItem value='Afternoon'>Afternoon</MenuItem>
                                <MenuItem value='Evening'>Evening</MenuItem>
                                <MenuItem value='Night'>Night</MenuItem>
                            </TextField>
                            <TextField
                                id="filled-select-currency-native"
                                select
                                label="START DATE"
                                variant="filled"
                                helperText="Please select your goal"
                                onChange={(event) => {
                                    setStartDate(event.target.value)
                                }}
                            >
                                <MenuItem value='Today'>Today</MenuItem>
                                <MenuItem value='Tomorrow'>Tomorrow</MenuItem>
                                <MenuItem value='After a week'>After a week</MenuItem>
                                <MenuItem value='After a month'>After a month</MenuItem>
                            </TextField>
                        </div>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={submitInfo}>Subscribe</Button>
                </DialogActions>
            </Dialog>

        </>
    )
}

export default InputHabitComponent
