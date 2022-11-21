import './App.css';
import BarNavigasi from './components/BarNavigasi';
import Beranda from './components/Beranda';
import {Routes, Route} from 'react-router-dom';
import Produk from './components/Produk';
import Produk1 from './components/Produk1';
import Kontak from './components/Kontak';
import Keranjang from './components/Keranjang';
import Checkout from './components/Checkout';
import GitHubArda from './components/GithubArda';
import GitHubRizal from './components/GithubRizal';
import GitHubFatcur from './components/GithubFatcur';
import GitHubQadri from './components/GithubQadri';
import IGArda from './components/IGArda';
import IGRizal from './components/IGRizal';
import IGFatcur from './components/IGFatcur';
import IGQadri from './components/IGQadri';
import LinkedInArda from './components/LinkedInArda';
import LinkedInRizal from './components/LinkedInRizal';
import LinkedInFatcur from './components/LinkedInFatcur';

function App() {
  return (
    <>
      <BarNavigasi/>
      <Routes>
        <Route path='/' element={<Beranda/>} />
        <Route path='/produk' element={<Produk/>} />
        <Route path='/produk/:id' element={<Produk1/>} />
        <Route path='/kontak' element={<Kontak/>} />
        <Route path='/keranjang' element={<Keranjang/>} />
        <Route path='/checkout' element={<Checkout/>} />

        <Route path='/github-arda' element={<GitHubArda/>} />
        <Route path='/github-rizal' element={<GitHubRizal/>} />
        <Route path='/github-fatcur' element={<GitHubFatcur/>} />
        <Route path='/github-qadri' element={<GitHubQadri/>} />

        <Route path='/ig-arda' element={<IGArda/>} />
        <Route path='/ig-rizal' element={<IGRizal/>} />
        <Route path='/ig-fatcur' element={<IGFatcur/>} />
        <Route path='/ig-qadri' element={<IGQadri/>} />

        <Route path='/linkedin-arda' element={<LinkedInArda/>} />
        <Route path='/linkedin-rizal' element={<LinkedInRizal/>} />
        <Route path='/linkedin-fatcur' element={<LinkedInFatcur/>} />
      </Routes>
    </>
  );
}

export default App;
