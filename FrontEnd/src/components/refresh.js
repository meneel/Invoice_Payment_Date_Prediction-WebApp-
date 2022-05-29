import * as React from 'react';
import Button from '@mui/material/Button';
import RefreshIcon from '@mui/icons-material/Refresh';

function Refresh () {

     const[refresh , setRefresh] = React.useState(false);

    const refreshHandler = () => {
        window.location.reload(setRefresh(true));
    }

    return (
    <div>
        
        <Button variant="contained" onClick={refreshHandler} id= "refresh">
        <RefreshIcon />
        </Button>
    </div>
    );
}
    

export default Refresh;