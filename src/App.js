import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './container/Navbar';
import HomeComponent from "./container/component/HomeComponent";
import ProductDetail from './container/component/ProductDetail';
import CartComponent from './container/component/CartComponent';
// import {useEffect} from 'react';
// import action from './container/redux/action';
// import { useDispatch } from 'react-redux';

function App() {
//   const dispatch = useDispatch();
//   useEffect(()=>{
//     let link = "https://fakestoreapi.com/products";
// //    fetch(link).then((response)=> response.json()).then((data) => dispatch(action.setData(data)));
//   },[]);

  // useEffect(()=>{
  //   let link = "https://api.escuelajs.co/api/v1/categories";
  //   fetch(link).then((response)=> response.json()).then((data) => dispatch(action.setCategories(data)));
  // },[]);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<HomeComponent />} />
        <Route exact path='/detail/:id' element={<ProductDetail />} />
        <Route exact path='/cart' element={<CartComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
