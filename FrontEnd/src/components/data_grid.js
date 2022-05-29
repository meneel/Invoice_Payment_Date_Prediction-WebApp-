import * as React from 'react';
import {useState, useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import getData ,{addData} from './data.js';
import AddData from './addData.js';
import getPData from './predictdata.js';
import Button from '@material-ui/core/Button';
import EditData from './editData.js';
import { editData1 } from './data.js';
import DeleteData from './deleteData.js';
import {DeleteData1} from './data.js';
import AdvancedSearch from './advancedSearch.js';
import { TextField } from '@mui/material';
import logo from './Highradius-logo.png';
import abc from './logo1.svg';
import Predict from './predict.js';
import predictData from './predictdata.js';
import Analytics from './chart.js';
import Refresh from './refresh.js';


function MyGrid() {
  const [rows, setData] = useState([]);
  const [predicted, setPredicted] = useState([]);
  useEffect(() => {
    async function getpdata() {
      setPredicted(await getPData());
    }
    getpdata();
  }, []);

  useEffect(() => {
    async function getdata() {
      setData(await getData());
    }
    getdata();
  }, []);



  function GetFullName(predicted) {
    console.log(predicted);
    return ( predicted.row.invoice_id)
  }

  function setFullName(predicted) {
    const [business_code] = predicted.value;

    return { business_code };
  }
  
  function parseFullName(value) {
    return String(value)
  }
  
  
  const columns = [
    { 
      field: 'sl_no', 
      headerName: 'Sl NO', 
      headerClassName: 'super-app-theme--header',
      headerAlign: 'left', width: 60 },
    {
      field: 'business_code',
      headerName: 'Business Code',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'left',
      width: 130,
      editable: true,
    },
    {
      field: 'cust_number',
      headerName: 'Customer Number',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'left',
      width: 135,
      editable: true,
    },
    {
      field: 'clear_date',
      headerName: 'Clear Date',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'left',
      width: 135,
      editable: true,
    },
    {
      field: 'buisness_year',
      headerName: 'Business Year',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'left',
      width: 135,
      editable: true,
    },
    {
      field: 'doc_id',
      headerName: 'Document ID',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'left',
      width: 135,
      editable: true,
    },
    {
      field: 'posting_date',
      headerName: 'Posting Date',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'left',
      width: 135,
      editable: true,
    },
    {
      field: 'document_create_date',
      headerName: 'Document Create Date',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'left',
      width: 175,
      editable: true,
    },
    {
      field: 'due_in_date',
      headerName: 'Due In Date',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'left',
      width: 135,
      editable: true,
    },
    {
      field: 'invoice_currency',
      headerName: 'Invoice Currency',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'left',
      width: 135,
      editable: true,
    },
    {
      field: 'document_type',
      headerName: 'Document Type',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'left',
      width: 135,
      editable: true,
    },
    {
      field: 'posting_id',
      headerName: 'Posting ID',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'left',
      width: 90,
      editable: true,
    },
    {
      field: 'total_open_amount',
      headerName: 'Total Open Amount',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'left',
      width: 145,
      editable: true,
    },
    {
      field: 'baseline_create_date',
      headerName: 'Baseline Create Date',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'left',
      width: 165,
      editable: true,
    },
    {
      field: 'cust_payment_terms',
      headerName: 'Customer Payment Terms',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'left',
      width: 195,
      editable: true,
    },
    {
      field: 'invoice_id',
      headerName: 'Invoice ID',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'left',
      width: 125,
      editable: true,
    },
    {
      field: 'isOpen',
      headerName: 'Is Open',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'left',
      width: 90,
      editable: true,
    },
    {
      field: 'aging_bucket',
      headerName: 'Predicted',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'left',
      width: 100,
      editable: true,
      // valueGetter: GetFullName,
      // valueSetter: setFullName,
      // valueParser: parseFullName,
    },
  ];
  
  const [pageSize, setPageSize] = React.useState(10);
  const [filteredData,setFilteredData] = useState([]);
  const [invoice,setinvoice] = useState({sl_no:'',business_code:'',cust_number:'',name_customer:'',clear_date:'',buisness_year:'',
  doc_id:'',posting_date:'',document_create_date:'',due_in_date:'',invoice_currency:'',document_type:'',
  posting_id:'',total_open_amount:'',baseline_create_date:'',cust_payment_terms:'',invoice_id:''});

  const {sl_no,business_code, cust_number,name_customer, clear_date, buisness_year, doc_id, posting_date, document_create_date, due_in_date, invoice_currency, document_type, posting_id, total_open_amount, baseline_create_date, cust_payment_terms, invoice_id} = invoice
  const{doc_id1,invoice_id1,cust_number1,buisness_year1}=filteredData;

  const changeHandler = (e) => {
    const {id,value} = e.target;
    setinvoice({...invoice,[id]:value})
  }

  const changeHandler1 = (e) => {
    const {id,value} = e.target;
    setFilteredData({...filteredData,[id]:value})
  }
  

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

 const [disabled, setdisabled] = useState(true);
 const [disabled1, setdisabled1] = useState(true);
  const [disabled2, setdisabled2] = useState(false);
  

  const handleClickOpen3 = () => {
    setOpen3(true);
    
  };



  const handleClose3 = () => {
    setOpen3(false);
  };
  
  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleClickOpen = () => {
  setOpen(true);
  };

  const handleClose = () => {
  setOpen(false);
  };

  const handleClickOpen1 = () => {
    setOpen1(true);
    };
  
  const handleClose1 = () => {
  setOpen1(false);
  };

  const checkHandler1 = (itm) => {
    let temp = rows.filter(item => item.sl_no === itm[0]);
    if (itm.length === 1) {
      setdisabled(false);
      setdisabled1(false);
      setdisabled2(true);
    } else {
      setdisabled(true)
      setdisabled1(true)
      setdisabled2(false)
    }
    var editData = "";
    if (temp.length>0){
      editData=temp 
    } else{
      editData="empty"
    }
    setinvoice(editData[0]);
    console.log(invoice);

  }

  const submitHandler = async(e) => {
    
    e.preventDefault();
    let response = await addData(invoice);
    console.log(response.data.response.insert);
    if(response.data.response.insert===true){
      window.alert('Data Added Successfully');
      setOpen(false);
      window.location.reload(true);
    } else{

      window.alert('Data Not Added');
    }
  }

  const editHandler = async() => {

    console.log(invoice);
    let response = await editData1(invoice);
    if (response.data.response===true){
      window.alert('Data Updated Successfully');
      setOpen1(false);
      window.location.reload(true);
    } else{
      window.alert('Data Not Updated');
    }

  }

  const deleteHandler = async() => {

    console.log(invoice);
    let response = await DeleteData1(invoice);
    if (response.data.response===true){
      window.alert('Data Deleted Successfully');
      setOpen2(false);
      window.location.reload(true);
    } else{
      window.alert('Data Not Deleted');
    }

  }



  const predictHandler = async() => {
    let response = await predictData(invoice);
    for (var i = 0; i < rows.length; i++) { 
      
      if( rows[i].sl_no===invoice.sl_no){

        rows[i].aging_bucket = response[0].aging_bucket;
      }
    }

  
  }

  console.log(filteredData)
  var result=''
  if (filteredData.length===0){
    result=rows;
  } else if (Object.keys(filteredData).includes("cust_number2") ){

    result = rows.filter((data) => data.cust_number.toString().includes(filteredData.cust_number2))
  } else if (Object.keys(filteredData).includes("buisness_year1") ){
    result = rows.filter((data) => data.cust_number.toString().includes(filteredData.cust_number1) && data.buisness_year.toString().includes(filteredData.buisness_year1) && data.doc_id.toString().includes(filteredData.doc_id1) && data.invoice_id.toString().includes(filteredData.invoice_id1))
  }


  const list = ["U001", "U002", "U005", "U007", "U013", "CA02"];
  var sum=0;
  var total=0;
  var hash = new Object();
  var hash1 = new Object();
  for(var i=0;i<list.length;i++){
    var Filter= rows.filter((data => data.business_code.toString().includes(list[i])));
    for(var j=0;j<Filter.length;j++){
      sum=sum+parseInt(Filter[j].total_open_amount);
    }
    hash[list[i]]=sum;
  }
  for(var i=0;i<list.length;i++){
    var Filter= rows.filter((data => data.business_code.toString().includes(list[i])));
  
    hash1[list[i]]=Filter.length;
  }
  
  console.log(hash);
  console.log(hash1);

  return (
    <div style={{ height: 450, width: '100%' }}>
      <div id="header" >
        <header>
          <img src={abc} alt="abc" />
          <img id = "Logo" src={logo} alt="Logo" />
          <br></br>
        </header>
      </div>
      <br></br>
      <br></br>
      <div id="predict">
        <Predict predictHandler={predictHandler}/>
      </div>
      <div id="analytics">
        <Analytics hash={hash} hash1={hash1} />
      </div>
      <div id="refresh">
        <Refresh />
      </div>
      <div id="add-button" >
      <AddData business_code={business_code} cust_number={cust_number} 
          clear_date={clear_date} buisness_year={buisness_year} 
          doc_id={doc_id} posting_date={posting_date} 
          document_create_date={document_create_date} 
          due_in_date={due_in_date} invoice_currency={invoice_currency} 
          document_type={document_type} posting_id={posting_id} 
          total_open_amount={total_open_amount} baseline_create_date={baseline_create_date} 
          cust_payment_terms={cust_payment_terms} invoice_id={invoice_id} 
          changeHandler={changeHandler} submitHandler={submitHandler} handleClickOpen={handleClickOpen} handleClose={handleClose} open={open} disabled={disabled2}/>
      </div>
      <div id="edit-button" >
          <EditData sl_no={sl_no} invoice_currency={invoice_currency} 
          cust_payment_terms={cust_payment_terms} 
          editHandler={editHandler} checkHandler1={checkHandler1} 
          handleClickOpen={handleClickOpen1} 
          changeHandler={changeHandler}
          handleClose={handleClose1} open={open1} disabled={disabled}/>
      </div>
      <div id="delete-button" >
          <DeleteData sl_no={sl_no} deleteHandler={deleteHandler}handleClickOpen={handleClickOpen2} handleClose={handleClose2} open={open2} disabled={disabled1}/>
      </div>
        <div id = "search">
        <TextField id="cust_number2"
          type="text"
          align="right"
          label="Search by Customer Id"
          variant="filled" 
          onChange={changeHandler1}
        />
        </div>
        <div id = "adsearch">
        <AdvancedSearch invoice_id1={invoice_id1} 
        doc_id1={doc_id1} buisness_year1={buisness_year1} 
        cust_number1={cust_number1} changeHandler1={changeHandler1}
        open={open3} handleClickOpen={handleClickOpen3} handleClose={handleClose3}/>
        </div>
      <DataGrid
          sx={{
            boxShadow: 2,
            border: 2,
            borderColor: 'white',
            '& .MuiDataGrid-cell:hover': {
              color: 'lightBlue',
            },
            '& MuiDataGrid-root css-gmwvud-MuiDataGrid-root': {
              color: 'white'
            },
            '& .super-app-theme--header': {
              color: 'white'
            },
            '& .MuiDataGrid-cell': {
              color: 'white',
              textAlign : 'left'
            },
            '& .MuiCheckbox-root svg path': {
              color: 'white'
            },
            '& .MuiTablePagination-root ':{
              color: "white"
            },
            '& .MuiDataGrid-columnSeparator': {
              visibility: 'hidden',
            },
          }}
        rows={result}
        getRowId={(row) => row.sl_no}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20, 50, 100]}
        checkboxSelection
        onSelectionModelChange={itm => checkHandler1(itm)}
        disableSelectionOnClick
      />
      <div id="footer">
        <footer>
          <p> © 2022 Highradius Corporations. All rights reserved. </p>
        </footer>
      </div>
    </div>
  );
}

export default MyGrid;
