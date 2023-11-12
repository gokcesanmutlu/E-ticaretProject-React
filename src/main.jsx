import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// sırası önemli index üstte olursa sayfa beyaz olur
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import './index.css'
import { ProductProvider } from './context/productContext.jsx';
import { BasketProvider } from './context/basketContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BasketProvider>
    <ProductProvider>
      <App />
    </ProductProvider>
  </BasketProvider>
)
/*Reactta bir mantık vardır: bir bileşen ile diğerini sarmalarsam , appi pp.nin içine almak gibi
 product provider'ın tüm bilgileri App'e children prop'u ile gider . App uygulamamın kendisidir. 
 zira tüm sayfalarımı içerir. Dolayısıyla product provider tüm uygulamamı sarmalıyor*/