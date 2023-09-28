import { AppBar, Breadcrumbs, CssBaseline, IconButton, Toolbar,Typography, Badge } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Outlet,Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const carts = useSelector((state) => state.dataCart);  
  const [total_cart_item, set_total_cart_item] = useState(0);  
  useEffect(()=>{
    set_total_cart_item(carts.length);
  },[carts]);
  return (
    <>
    <CssBaseline/>
      <AppBar>
         <Toolbar>
            <IconButton></IconButton>            
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            DigitalShop
          </Typography>          
          <Breadcrumbs >
            <Link underline="hover" color="inherit" to="/">
              <Typography variant='button' display="block" gutterBottom> Home </Typography>
            </Link>
            <Link underline="hover" color="inherit" to="/">
              <Typography variant='button' display="block" gutterBottom> Login </Typography>
            </Link>
            
              <IconButton size="large"  aria-label="show 17 new notifications"  color="inherit" >                
              <Link underline="hover" color="inherit" to="/cart">
                <Badge badgeContent={(total_cart_item==0)?"0":total_cart_item} color="error">
                  <NotificationsNoneIcon />
                </Badge>
                </Link>
              </IconButton>        
            
          </Breadcrumbs>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  )
}
