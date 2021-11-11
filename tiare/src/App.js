import './App.css';
import Inicio from './components/Inicio'
import Products from './components/Products';
import Usuarios from './components/Usuarios';
import QuienesSomos from './components/QuienesSomos';
import Footer from './components/footer';
import NavBar from './components/NavBar';
import logo from './assets/images/logo-letra-negra.png';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <img style={{width: 25 +'rem'}} src={logo} alt="Logo" />
        <NavBar />   
        <Routes>
            <Route path='/' exact={true} element={<Inicio />} />  
            <Route path='/products'  element={<Products />} />
            <Route path='/users' element={<Usuarios />} />
            <Route path='/nosotros'  element={<QuienesSomos />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
