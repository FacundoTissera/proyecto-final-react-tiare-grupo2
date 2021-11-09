

import '../NavBar.css'
import logo from '../assets/images/logo-letra-negra.png'
import Inicio from './Inicio';
import Products from './Products';
import Usuarios from './Usuarios';
import QuienesSomos from './QuienesSomos';

import { Link, Route, Routes } from 'react-router-dom';

function NavBar() {
    return(
    <div>
        <nav>
        
        <img style={{width: 25 +'rem'}} src={logo} alt="Logo" />

            <ul id="menu">
                <li><Link to='/'>INICIO</Link></li>
                <li><Link to='/products'>PRODUCTOS</Link> </li>
                <li><Link to='/users'> USUARIOS</Link> </li>
                <li><Link to='/nosotros'> QUIENES SOMOS</Link> </li>
            </ul>
        </nav>

        <Routes>
            <Route path='/' element={<Inicio />} /> 
            <Route path='/products' element={<Products />} />
            <Route path='/users' element={<Usuarios />} />
            <Route path='/nosotros' element={<QuienesSomos />} />
        </Routes>

                    {/* <ul>
                        <li><a href="">Ventas</a> </li>
                        <li><a href="/admin/listaEdit">Lista de productos</a></li>
                        <li><a href="/admin/newProduct">Agregar Producto</a></li>
                        <li><a href="">Categorias</a></li>
                        <li><a href="">Marketing</a> </li>
                    </ul>  
                </li>
                <li><a href="">CONFIGURACIÓN</a>
                    <ul>
                        <li><a href="">Configuracion de usuarios</a> </li>
                        <li><a href="">Configuracion admin</a> </li>
                        <li><a href="">Configuracion pagina</a> </li>
                    </ul>
                </li> */}
            {/* </ul> */}
        {/* </nav>   */}
    
    </div>
    )    
};
export default NavBar;