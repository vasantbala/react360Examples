import React from 'react';
import Button from '@material-ui/core/Button';

function WelcomeContainer(){
    return(
        <div>
        <p>Welcome!</p>
        <Button variant="contained" color="primary">
            Get Started
        </Button>
        </div>
        
    );
}

export default WelcomeContainer;