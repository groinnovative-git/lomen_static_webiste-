import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/css/custom.css';
import { CartProvider } from './context/CartContext';
import HomeModule from "./modules/HomeModule";
import ProductsModule from './modules/ProductsModule';
import ProductModule from './modules/ProductModule';
import OrdersModule from './modules/OrdersModule';
import CartModule from './modules/CartModule';
import WishlistModule from './modules/WishlistModule';
import ShirtModule from './modules/ShirtModule';
import TShirtModule from './modules/TShirtModule';
import PantModule from './modules/PantModule';
import CustomizeModule from './modules/CustomizeModule';
import AboutModule from './modules/AboutModule';
import ContactModule from './modules/ContactModule';
import CollectionModule from './modules/CollectionModule';
import Footer from './components/Footer';
import PromoPopup from './components/PromoPopup';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
          <PromoPopup />
          <Routes>
            <Route path='/' element={<HomeModule />}/>
            <Route path='/collection' element={<CollectionModule />}/>
            <Route path='/product' element={<ProductsModule />}/>
            <Route path='/product/:id' element={<ProductModule />}/>
            <Route path='/shirt' element={<ShirtModule />}/>
            <Route path='/tshirt' element={<TShirtModule />}/>
            <Route path='/pant' element={<PantModule />}/>
            <Route path='/customize' element={<CustomizeModule />}/>
            <Route path='/orders' element={<OrdersModule />}/>
            <Route path='/cart' element={<CartModule />}/>
            <Route path='/wishlist' element={<WishlistModule />}/>
            <Route path='/about' element={<AboutModule />}/>
            <Route path='/contact' element={<ContactModule />}/>
          </Routes>
          <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;