import * as React from 'react';
import Button from '@mui/material/Button';
import BatchPredictionIcon from '@mui/icons-material/BatchPrediction';

function Predict ({predictHandler}) {

    return (
    <div>
        
        <Button variant="contained" onClick={predictHandler} id= "predict">
        Predict
        <BatchPredictionIcon />
        </Button>
    </div>
    );
}
    

export default Predict;