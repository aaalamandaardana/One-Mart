import './App.css';
import BarNavigasi from './components/BarNavigasi';
import Beranda from './components/Beranda';
import {Routes, Route} from 'react-router-dom';
import Produk from './components/Produk';
import Produk1 from './components/Produk1';
import Kontak from './components/Kontak';
import Keranjang from './components/Keranjang';
import Checkout from './components/Checkout';

function App() {
  return (
    <>
      <BarNavigasi/>
      <Routes>
        <Route path='/beranda' element={<Beranda/>} />
        <Route path='/produk' element={<Produk/>} />
        <Route path='/produk/:id' element={<Produk1/>} />
        <Route path='/kontak' element={<Kontak/>} />
        <Route path='/keranjang' element={<Keranjang/>} />
        <Route path='/checkout' element={<Checkout/>} />
      </Routes>
    </>
  );
}

export default App;
