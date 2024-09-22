import './Nav.css'
import {Link} from 'react-router-dom'
import Logo from '../assets/logoNova.png'
import { MdAddShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";



const Nav = () =>{
    return(
        <nav>
            <div className='logo'>
             <img src={Logo} alt="" />
            </div>
            <div className='navBar'>
                <div className='barra-Pesquisa'>
                    <input type="text" />
                </div>
                <div className='opcoes-navegacao'>
                    <Link to = '/'><span>HOME</span></Link>
                    <Link to = '/Ofertas'><span>OFERTAS</span></Link>
                    <Link to = '/MaisVendidos' ><span>MAIS VENDIDOS </span></Link>
                    <Link to = '/Livros'><span>LIVROS </span></Link>
                    <Link to = '/Computadores' ><span>COMPUTADORES</span></Link>
                </div>
            </div>
            <div className='profile-compras'>
                <CgProfile className='profile-icon'/>
                <MdAddShoppingCart className='cart-icon'/>
            </div>
        </nav>
    )
}


export default Nav;