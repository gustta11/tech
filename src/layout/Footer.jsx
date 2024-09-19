import './Footer.css'
import {Link} from 'react-router-dom'


const Footer = () =>{

    return(
        <div className='div-footer'>
            <footer>
                    <div className='footer-opcoes'>
                        <Link to="https://www.youtube.com/?app=desktop&hl=pt"><span>CONTATO</span></Link>
                        <Link to="https://www.jusbrasil.com.br/modelos-pecas/modelo-termos-e-condicoes-para-site-ou-app/784909844#:~:text=O%20Termos%20e%20Condi%C3%A7%C3%B5es%20Gerais,e%20uso%20da%20plataforma%20disponibilizada."><span>TERMOS</span></Link>
                        <Link to="https://www.instagram.com/"><span>INSTAGRAM</span></Link>
                    </div>
            </footer>
        </div>
    )
}

export default Footer;