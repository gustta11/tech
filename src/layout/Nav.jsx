import './Nav.css'
import {Link} from 'react-router-dom'
import Logo from '../assets/Logo.png'


const Nav = () =>{
    return(
        <nav>
            <div className='logo'>
             LOGO
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
                profile
                carrinho
            </div>
        </nav>
    )
}


export default Nav;