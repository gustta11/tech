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
                            <img src={gabinete}  />
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
                            <img src={livro4}  />
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
                            <img src={livro1}  />
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
                            <img src={Notebook}  />
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
                            <img src={teclado}  />
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
                            <img src={headset}  />
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