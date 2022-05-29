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
import SearchIcon from '@mui/icons-material/Search';

function AdvancedSearch ({invoice_id1,buisness_year1,changeHandler1,disabled,doc_id1, cust_number1,searchHandler,handleClickOpen,handleClose, open}) {

    return (
    <div>
        
        <Button variant="contained" onClick={handleClickOpen} id= "adsearch">
        Advanced Search
        <SearchIcon />
        </Button>
        <Dialog id = "dialog" open={open} onClose={handleClose} maxWidth="2">
            
        <DialogTitle align="left">Advanced Search</DialogTitle>
        <DialogContent>
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <div> 
                <TextField
                autoFocus
                margin="dense"
                name= "doc_id1"
                id="doc_id1"
                label="Document ID"
                type="text"
                fullWidth
                variant="filled"
                value={doc_id1}
                onChange={changeHandler1}
                /> 
                <TextField
                autoFocus
                margin="dense"
                name= "invoice_id1"
                id="invoice_id1"
                label="Invoice ID"
                type="text"
                fullWidth
                variant="filled"
                value={invoice_id1}
                onChange={changeHandler1}
                /> 
                <TextField
                autoFocus
                margin="dense"
                name="cust_number1"
                id="cust_number1"
                label="Customer Number"
                type="text"
                fullWidth
                variant="filled"
                value={cust_number1}
                onChange={changeHandler1}
                />
                <TextField
                autoFocus
                margin="dense"
                name="buisness_year1"
                id="buisness_year1"
                label="Business Year"
                type="text"
                fullWidth
                variant="filled"
                value={buisness_year1}
                onChange={changeHandler1}
                />
            </div>
            </Box>
        </DialogContent>
        <DialogActions>
            <Button  type="submit" variant="outlined"  onClick={handleClose}>Search</Button>
            <Button variant="outlined" onClick={handleClose}>Cancel</Button>
        </DialogActions>
        </Dialog>
    </div>
    );
}
    

export default AdvancedSearch;