import * as React from 'react';
import {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import EditIcon from '@mui/icons-material/Edit';
import {Bar} from 'react-chartjs-2';
import {Chart as ChartJS,
        CategoryScale,
        BarElement,
        LinearScale,
        Title,
        Tooltip,
        Legend,


} from 'chart.js';

ChartJS.register(
    CategoryScale,
    BarElement,
    LinearScale,
    Title,
    Tooltip,
    Legend,

    
);

function Analytics ({hash,hash1}) {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const label =['Unilever','Johnson and Johnson','Bose',"Kellog's", 'Sony','Puma'];

    const styles = {
        dialogPaper: {
            minHeight: '80vh',
            maxHeight: '80vh',
        },
    };

    const options = {
        indexAxis: 'x',
        title: {
            display: true,
            text: 'Sales',
            fontSize: 80,
        },
        legend: {
            display: true,
            position: 'right'
        },
        responsive: true,
        Elements: {
            bar : {
                borderWidth:50
            },
        }
    }

    const data = {
        labels: label,
        datasets: [ 
            {
                label: 'NO of Customers',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: Object.values(hash1)
            },
            {
                label: 'Total Open Amount',
                backgroundColor: 'rgba(54,162,235,0.2)',
                borderColor: 'rgba(54,162,235,1)',
                hoverBackgroundColor: 'rgba(54,162,235,0.4)',
                hoverBorderColor: 'rgba(54,162,235,1)',
                data: Object.values(hash)

            }
        ]
    };

    return (
    <div>
        
        <Button variant="contained" onClick={handleClickOpen}>
        Analytics View
        <EditIcon />
        </Button>
        <div style={{ width:"80%", height:"50%"}}>
            <Dialog style={{ height:"600px"}} open={open} onClose={handleClose}  fullWidth={true} maxWidth='md'>
                
            <DialogTitle align="left">Analytics View</DialogTitle>
            <DialogContent>
            <Bar data={data} options={options}/>
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" onClick={handleClose}>Cancel</Button>
            </DialogActions>
            </Dialog>
        </div>
    </div>
    );
}
    

export default Analytics;