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

function EditData ({sl_no,changeHandler,disabled,invoice_currency, cust_payment_terms,checkHandler1,editHandler,handleClickOpen,handleClose, open}) {

    return (
    <div>
        
        <Button variant="contained" onClick={handleClickOpen} disabled={disabled}>
        Edit
        <EditIcon />
        </Button>
        <Dialog id = "dialog" open={open} onClose={handleClose} maxWidth="2">
            
        <DialogTitle align="left">Edit Data</DialogTitle>
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
                    name= "sl_no"
                    id="sl_no"
                    label="sl_no"
                    type="text"
                    fullWidth
                    variant="filled"
                    value={sl_no}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    /> 
                <TextField
                autoFocus
                margin="dense"
                name= "invoice_currency"
                id="invoice_currency"
                label="invoice_currency"
                type="text"
                fullWidth
                variant="filled"
                value={invoice_currency}
                onChange={changeHandler}
                InputLabelProps={{
                    shrink: true,
                  }}
                /> 
                <TextField
                autoFocus
                margin="dense"
                name="cust_payment_terms"
                id="cust_payment_terms"
                label="cust_payment_terms"
                type="text"
                fullWidth
                variant="filled"
                value={cust_payment_terms}
                onChange={changeHandler}
                InputLabelProps={{
                    shrink: true,
                  }}
                />
            </div>
            </Box>
        </DialogContent>
        <DialogActions>
            <Button  type="submit" variant="outlined"  onClick={editHandler}>Edit</Button>
            <Button variant="outlined" onClick={handleClose}>Cancel</Button>
        </DialogActions>
        </Dialog>
    </div>
    );
}
    

export default EditData;