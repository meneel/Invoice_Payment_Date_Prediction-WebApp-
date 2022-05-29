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
import AddIcon from '@mui/icons-material/Add';

function AddData ({business_code, 
    cust_number, clear_date, buisness_year,doc_id, 
    posting_date,document_create_date, due_in_date, 
    invoice_currency,document_type,posting_id,
    total_open_amount,baseline_create_date,cust_payment_terms,invoice_id,changeHandler,submitHandler,handleClickOpen,handleClose, open,disabled}) {

    

    return (
    <div>
        
        <Button variant="contained" onClick={handleClickOpen} disabled={disabled}>
        Add
        <AddIcon />
        </Button>
        <Dialog open={open} onClose={handleClose} maxWidth="2">
            
        <DialogTitle align="left">Add Data</DialogTitle>
        <DialogContent id = "dialog">
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
                id="business_code"
                label="Business Code"
                type="text"
                fullWidth
                variant="filled"
                value={business_code}
                onChange={changeHandler}
                /> 
                <TextField
                autoFocus
                margin="dense"
                id="cust_number"
                label=" Customer Number"
                type="number"
                fullWidth
                variant="filled"
                value={cust_number}
                onChange={changeHandler}
                />
                <TextField
                autoFocus
                margin="dense"
                id="clear_date"
                label=" Clear Date"
                type="date"
                fullWidth
                variant="filled"
                value={clear_date}
                onChange={changeHandler}
                InputLabelProps={{
                    shrink: true,
                }}
                />
                <TextField
                autoFocus
                margin="dense"
                id="buisness_year"
                label="Business Year"
                type="number"
                fullWidth
                variant="filled"
                value={buisness_year}
                onChange={changeHandler}
                />
            </div>
            <div>
            <TextField
            autoFocus
            margin="dense"
            id="doc_id"
            label="Document ID"
            type="text"
            fullWidth
            variant="filled"
            value={doc_id}
            onChange={changeHandler}
            />
            <TextField
            autoFocus
            margin="dense"
            id="posting_date"
            label="Posting Date"
            type="date"
            fullWidth
            variant="filled"
            value={posting_date}
            onChange={changeHandler}
            InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
            autoFocus
            margin="dense"
            id="document_create_date"
            label="document_create_date"
            type="date"
            fullWidth
            variant="filled"
            value={document_create_date}
            onChange={changeHandler}
            InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
            autoFocus
            margin="dense"
            id="due_in_date"
            label="Due Date"
            type="Date"
            fullWidth
            variant="filled"
            value={due_in_date}
            onChange={changeHandler}
            InputLabelProps={{
                shrink: true,
              }}
            />
            </div>
            <div>
            <TextField
            autoFocus
            margin="dense"
            id="invoice_currency"
            label="Invoice Currency"
            type="text"
            fullWidth
            variant="filled"
            value={invoice_currency}
            onChange={changeHandler}
            />
            <TextField
            autoFocus
            margin="dense"
            id="document_type"
            label="Document Type"
            type="text"
            fullWidth
            variant="filled"
            value={document_type}
            onChange={changeHandler}
            />
            <TextField
            autoFocus
            margin="dense"
            id="posting_id"
            label="Posting ID"
            type="number"
            fullWidth
            variant="filled"
            value={posting_id}
            onChange={changeHandler}
            />
            <TextField
            autoFocus
            margin="dense"
            id="total_open_amount"
            label="Total Open Amount"
            type="double"
            fullWidth
            variant="filled"
            value={total_open_amount}
            onChange={changeHandler}
            />
            </div>
            <div>
            <TextField
            autoFocus
            margin="dense"
            id="baseline_create_date"
            label="Baseline Create Date"
            type="date"
            fullWidth
            variant="filled"
            value={baseline_create_date}
            onChange={changeHandler}
            InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
            autoFocus
            margin="dense"
            id="cust_payment_terms"
            label="Customer Payment Terms"
            type="text"
            fullWidth
            variant="filled"
            value={cust_payment_terms}
            onChange={changeHandler}
            />
            <TextField
            autoFocus
            margin="dense"
            id="invoice_id"
            label="Invoice ID"
            type="number"
            fullWidth
            variant="filled"
            value={invoice_id}
            onChange={changeHandler}
            />
            </div>
            </Box>
        </DialogContent>
        <DialogActions>
            <Button  type="submit" variant="outlined"  onClick={submitHandler}>Add</Button>
            <Button variant="outlined" onClick={handleClose}>Cancel</Button>
        </DialogActions>
        </Dialog>
    </div>
    );
}
    

export default AddData;