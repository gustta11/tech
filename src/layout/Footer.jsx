import './Footer.css'
import {Link} from 'react-router-dom'
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";


const Footer = () =>{

    return(
        <div className='div-footer'>
            <footer>
                    <div className='footer-opcoes'>
                        <Link to="https://www.youtube.com/?app=desktop&hl=pt"><span>CONTATO</span></Link>
                        <Link to="https://www.jusbrasil.com.br/modelos-pecas/modelo-termos-e-condicoes-para-site-ou-app/784909844#:~:text=O%20Termos%20e%20Condi%C3%A7%C3%B5es%20Gerais,e%20uso%20da%20plataforma%20disponibilizada."><span>TERMOS</span></Link>

                    
                    <div className='redesSociais'>
                            <Link to="https://www.instagram.com/"><span><FaInstagram className='icone'/> </span></Link>
                            <Link to="https://www.facebook.com/?locale=pt_BR"><span><FaFacebook className='icone'/> </span></Link>
                            <Link to="https://www.linkedin.com/in/gustavo-keven/"><span><CiLinkedin  className='icone'/> </span></Link>
                            
                        </div>
                        </div>
            </footer>
        </div>
    )
}

export default Footer;