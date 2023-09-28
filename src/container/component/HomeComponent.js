// import { useSelector } from "react-redux"
import ProductItem from "./ProductItem";
import { Box, Grid } from "@mui/material";
import {data} from "../Data/Data";


export default function HomeComponent() {
  // const [products] = useSelector((state) => state.dataRecord);
  const products = data;
  
   return (
    <>

      <Box 
        component="img"
        sx = {{width:"100%",}}  alt="Online Shopping Cart" 
        src="/images/Online-Store.jpg"/>
      <Grid container spacing={2}>
        
        <Grid item xs = {4}>

        </Grid>
        <Grid item xs = {8}>  
          <Grid container spacing={2} >
        {
          products.length > 0 && products.map((element,index) => {
            return(
              <Grid key={index} item xs={6} sm={4} md={4}>
                <ProductItem data={element} />
              </Grid>
            )
          })
        }
        </Grid>
        </Grid>
      </Grid>
        
      
      

    </>
  )
}
