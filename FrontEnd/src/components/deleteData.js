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
import DeleteIcon from '@mui/icons-material/Delete';

function DeleteData ({sl_no,deleteHandler,handleClickOpen,handleClose, open, disabled}) {

    return (
    <div>
        
        <Button variant="contained" onClick={handleClickOpen} disabled={disabled}>
        Delete
        <DeleteIcon />
        </Button>
        <Dialog id = "dialog" open={open} onClose={handleClose} maxWidth="2">
            
        <DialogTitle align="left">Delete Data</DialogTitle>
        <DialogContent>
           <p> Are you sure you want to delete this record?</p>
        </DialogContent>
        <DialogActions>
            <Button  type="submit" variant="outlined"  onClick={deleteHandler}>Delete</Button>
            <Button variant="outlined" onClick={handleClose}>Cancel</Button>
        </DialogActions>
        </Dialog>
    </div>
    );
}
    

export default DeleteData;