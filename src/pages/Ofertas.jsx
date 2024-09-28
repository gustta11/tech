import './Ofertas.css'
import headset from '../assets/head.png'
import teclado from '../assets/teclado.png'
import Notebook from '../assets/note.png'
import livro1 from '../assets/livro1.png'
import livro4 from '../assets/livro4.png'
import gabinete from '../assets/gabinete.png'


const Ofertas = () =>{

    return(
        <div>
            <section className='ofertas'>

                    <div className='card_ofertas'>
                        <div className='card_ofertas_imagem'>
                            <img src={gabinete} alt='Gabinete gamer' />
                        </div>
                        <div className='card_ofertas_preco'>
                             <p className='preco_oferta'>20%off</p>
                            <p>R$ 2.500 <span>De: R$4.000</span> </p>
                            <p>Gabinete</p>
                            <p  className='card_ofertas_adicionaraocarrinho' >Adicionar ao carrinho</p>
                        </div>
                    </div>

                 
                    <div className='card_ofertas'>
                        <div className='card_ofertas_imagem'>
                            <img src={livro4} alt='Livro de algoritmos em JavaScript' />
                        </div>
                        <div className='card_ofertas_preco'>
                             <p className='preco_oferta'>20%off</p>
                            <p>R$ 2.500 <span>De: R$4.000</span> </p>
                            <p>Gabinete</p>
                            <p  className='card_ofertas_adicionaraocarrinho' >Adicionar ao carrinho</p>
                        </div>
                    </div>

                   
                    <div className='card_ofertas'>
                        <div className='card_ofertas_imagem'>
                            <img src={livro1}  alt='Livro de Html, css e JavaScript'/>
                        </div>
                        <div className='card_ofertas_preco'>
                             <p className='preco_oferta'>20%off</p>
                            <p>R$ 2.500 <span>De: R$4.000</span> </p>
                            <p>Gabinete</p>
                            <p  className='card_ofertas_adicionaraocarrinho' >Adicionar ao carrinho</p>
                        </div>
                    </div>

               
                    <div className='card_ofertas'>
                        <div className='card_ofertas_imagem'>
                            <img src={Notebook} alt='Notebook Gamer' />
                        </div>
                        <div className='card_ofertas_preco'>
                             <p className='preco_oferta'>20%off</p>
                            <p>R$ 2.500 <span>De: R$4.000</span> </p>
                            <p>Gabinete</p>
                            <p  className='card_ofertas_adicionaraocarrinho' >Adicionar ao carrinho</p>
                        </div>
                    </div>

                    <div className='card_ofertas'>
                        <div className='card_ofertas_imagem'>
                            <img src={teclado} alt='Teclado Gamer' />
                        </div>
                        <div className='card_ofertas_preco'>
                             <p className='preco_oferta'>20%off</p>
                            <p>R$ 2.500 <span>De: R$4.000</span> </p>
                            <p>Gabinete</p>
                            <p  className='card_ofertas_adicionaraocarrinho' >Adicionar ao carrinho</p>
                        </div>
                    </div>


                    <div className='card_ofertas'>
                        <div className='card_ofertas_imagem'>
                            <img src={headset} alt='Headset gamer' />
                        </div>
                        <div className='card_ofertas_preco'>
                             <p className='preco_oferta'>20%off</p>
                            <p>R$ 2.500 <span>De: R$4.000</span> </p>
                            <p>Gabinete</p>
                            <p  className='card_ofertas_adicionaraocarrinho' >Adicionar ao carrinho</p>
                        </div>
                    </div>

                 
            
            </section>
        
        </div>
    )
}

export default Ofertas;