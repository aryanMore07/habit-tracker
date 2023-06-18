import React from 'react';
import './landingPage.css';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const LandingComponent = () => {
    return (
        <div className='landing-component-div'>
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </div>
    )
}

export default LandingComponent
