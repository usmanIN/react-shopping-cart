import {Button, Grid, IconButton, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {data} from "../Data/Data";
import { useParams } from 'react-router-dom';
import { AddCircleOutlined, RemoveCircle } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import action from '../redux/action';

export default function ProductDetail() {
    const {id} = useParams();
    const [product,setProduct] = useState({});
    const [counter,setCounter] = useState(1);
    useEffect(()=>{
        setProduct(data.filter((element) => element.id == id));
    },[id]);
        
    const addCounter = () => {
        setCounter(counter+1);
    }
    const subCounter = () => {
        if(counter>1){
            setCounter(counter-1);
        }
    }

    // const styles = (theme) => ({
    //     root:{
    //         backgroundColor: 'red',
    //         [theme.breakpoints.not('md')]: {
    //             backgroundColor: 'red',
    //         }
    //     }
    // })
    const dispatch = useDispatch();
    

    
  return product.length > 0 ? (
    
    <Grid container style={{marginTop:'5em'}}>
        <Grid item xs={12} md={6}>            
            <img src={product[0].image} alt={product[0].title} style={{       
                display:"block",
                width:"40%",
                margin:"0px auto",
                zoom:"40%",
            }}/>
        </Grid>
        <Grid item xs={12} md={6}>
            <Typography sx={{
                typography:{
                    xs:'body1',
                    sm: 'h4',
                    md: 'h3',
                }
            }} >{product[0].title}</Typography>
            <Typography display="block" sx={{padding:'10px 0px'}}>Price: ${product[0].price}</Typography>
            <Typography display="block" sx={{padding:'10px 0px'}}>
                {product[0].description}
            </Typography>
            <IconButton size='small' onClick={addCounter}>
                <AddCircleOutlined/>
            </IconButton>
            <Typography variant='caption'>{counter}</Typography>
            <IconButton size='small' display="block" onClick={subCounter}>
                <RemoveCircle/>
            </IconButton>            
            <Button variant="contained" size="small"color='primary' onClick={() => {dispatch(action.addItem(product[0]))}}>Add to Cart</Button>
        </Grid>
    </Grid>
  ): "No item matched/Found";
}
