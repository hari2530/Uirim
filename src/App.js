import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import NavBar from './Components/NavBar';
import StoreDetails from './Pages/StoreDetails';
import LoginPage from './Pages/LoginPage';
import FeedsView from './Pages/FeedsView';
import ProfileInfo from './Pages/ProfileInfo';
import Reg from './Pages/Reg';
import Order from './Pages/Order';
import Submitreg from './Pages/Submitreg';
import Orderhis from './Pages/Orderhis';
import Cardpage from './Pages/Cardpage';
import Techlog from './Pages/Techlog';
import Dashboard from './Pages/Dashboard';
import ProductFrom from './Pages/ProductForm';


function App() {
  return (
    <>
     <BrowserRouter>
       <NavBar/>
       <Routes>
         <Route path="/" element={<MainPage />} />
         <Route path="/store-details" element={<StoreDetails />}  />
         <Route path='/Feed-views' element={<FeedsView/>} />
         <Route path="/Login-Page" element={<LoginPage/>} />
         <Route path='/Profile-info' element={<ProfileInfo/>} />
         <Route path='/Reg' element={<Reg/>}/> 
         <Route path="/Order" element={<Order/>} />
         <Route path="/Submitreg" element={<Submitreg />} />
         <Route path='/Orderhis' element={<Orderhis />} />
         <Route path='/Cardpage' element={<Cardpage />} />
         <Route path='/Techlog' element={<Techlog     />} />
         <Route path='Dashboard' element={<Dashboard />} />
         <Route path='/ProductFrom' element={<ProductFrom/>} />
       </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
