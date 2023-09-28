import { DeleteOutline } from '@mui/icons-material';
import { TableBody, TableCell, TableContainer, TableHead, TableRow, Table, Paper, Grid, IconButton} from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import action from '../redux/action';

export default function CartComponent() {
    const dispatch = useDispatch();
    const cartList = useSelector((state)=> state.dataCart);
    const [total_price, setTotal_Price] = useState({
        subTotal:0,
        deliverCharge:0,
        totalAmount:0,
    });
    useEffect(()=>{
        if(cartList.length > 0){
        let subtotal = 0;            
        cartList.forEach(element => {
            subtotal += element.price;
        });

        let deliverCharge = 0 ;
         
        let total_amount = subtotal + deliverCharge;
           total_price.subTotal = subtotal;
           total_price.deliverCharge = deliverCharge;
           total_price.totalAmount = total_amount;
            setTotal_Price(total_price); 

        }
        
    },[cartList]);


    
  return (
    <>
    <Grid container  style={{marginTop:'5em'}} spacing={4}>
        <Grid item xs={12} md={8}>
            <TableContainer component={Paper} >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Product Name</TableCell>
                        <TableCell align='right'>Qty.</TableCell>
                        <TableCell align='right'>Price</TableCell>
                        <TableCell align='right'>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        cartList.length>0 && cartList.map((element)=>(
                            <TableRow
                                key={element.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell >{element.title}</TableCell>
                            <TableCell align='right'>{element.quantity}</TableCell>
                            <TableCell align='right'>{element.price}</TableCell>
                            <TableCell align='right'>
                                <IconButton size='small' display="block" onClick={() => dispatch(action.delItem(element))}>
                                    <DeleteOutline />
                                </IconButton>
                            </TableCell>
                            </TableRow>
                        ))
                    }

                </TableBody>
                </Table>
            </TableContainer>
        </Grid>
        <Grid item xs={12} md={4}>
            <TableContainer>
            <Table>
                    <TableRow>
                        <TableCell>PRICE DETAILS</TableCell>
                        <TableCell></TableCell>                       
                    </TableRow>
                    <TableRow>
                        <TableCell>SUB TOTAL</TableCell>
                        <TableCell>{total_price.subTotal}</TableCell>                       
                    </TableRow>                    
                    <TableRow>
                        <TableCell>Delivery Charges</TableCell>
                        <TableCell>{total_price.deliverCharge}</TableCell>                       
                    </TableRow>                    
                    <TableRow>
                        <TableCell>TOTAL Amount</TableCell>
                        <TableCell>{total_price.totalAmount}</TableCell>                       
                    </TableRow>
                </Table>
            </TableContainer>
        </Grid>
    </Grid>
        </>
  )
}
