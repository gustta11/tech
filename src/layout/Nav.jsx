import './Nav.css'



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
                    <span>HOME</span>
                    <span>OFERTAS</span>
                    <span>MAIS VENDIDOS </span>
                    <span>LIVROS </span>
                    <span>COMPUTADORES</span>
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