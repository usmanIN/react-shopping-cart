import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

export default function ProductItem(props) {
    const data = props.data;    
  return (    
    <><Link 
    to={`/detail/${data.id}`}
    
    >
      <Card sx={{height:'100%'}}>
        <CardMedia 
        sx={{height:200, width:'100%'}}
          image={data.image}
          title={data.title}
         />
         <CardContent sx={{}}>
            <Typography gutterBottom variant='body1' sx={{fontWeight:500}}>{data.title}</Typography>
         </CardContent>
         <CardActions>
            <Button size='small'>Add to Cart</Button>
         </CardActions>
      </Card>
      </Link>
    </>
    
  )
}
