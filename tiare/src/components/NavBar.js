
import { Link } from 'react-router-dom';
function NavBar(){
    return(
        <div>
            <nav>
                <ul id="menu">
                    <li><Link to='/'exact='true'>INICIO</Link></li>
                    <li><Link to='/products'>PRODUCTOS</Link> </li>
                    <li><Link to='/users'> USUARIOS</Link> </li>
                    <li><Link to='/nosotros'> QUIENES SOMOS</Link> </li>
                </ul>
            </nav>

        
        </div>
    )
};

export default NavBar;