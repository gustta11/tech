import './Produtos.css'
import Notebook from '../assets/note.png'
import ssd from '../assets/ssd.png'
import teclado from '../assets/teclado.png'
import memoriaRam from '../assets/memoriaRam.png'
import headset from '../assets/head.png'
import gabinete from '../assets/gabinete.png'


const Produtos =() => {

    return(
        <div>
            <section className='produtos'>

                    <div className='card_produto'>
                        <div className='card_produto_imagem'>
                            <img src={gabinete}  />
                        </div>
                        <div className='card_produto_preco'>
                            <p className='preco_oferta'>20%off</p>
                            <p>R$ 2.500 <span>De: R$4.000</span> </p>
                            <p>Gabinete</p>
                        </div>
                    </div>

                    <div className='card_produto'>
                        <div className='card_produto_imagem'>
                            <img src={headset}  />
                        </div>
                        <div className='card_produto_preco'>
                            <p className='preco_oferta'>20%off</p>
                            <p>R$ 2.500 <span>De: R$4.000</span></p>
                            <p>Headset</p>
                        </div>
                    </div>

                    <div className='card_produto'>
                        <div  id='memoriaRam'  className='card_produto_imagem'>
                            <img src={memoriaRam}  />
                        </div>
                        <div className='card_produto_preco'>
                            <p className='preco_oferta'>20%off</p>
                            <p>R$ 2.500 <span>De: R$4.000</span></p>
                            <p>Memória</p>
                        </div>
                    </div>

                    <div className='card_produto'>
                        <div className='card_produto_imagem'>
                            <img src={teclado}  />
                        </div>
                        <div className='card_produto_preco'>
                            <p>Teclado</p>
                            <p>R$ 2.500</p>
                            <p  className='card_produto_adicionaraocarrinho' >Adicionar ao carrinho</p>
                            
                        </div>
                    </div>

                    <div className='card_produto'>
                        <div className='card_produto_imagem'>
                            <img src={ssd}  />
                        </div>
                        <div className='card_produto_preco'>
                            <p>Ssd</p>
                            <p>R$ 2.500</p>
                            <p className='card_produto_adicionaraocarrinho' >Adicionar ao carrinho</p>
                            
                        </div>
                    </div>

                    <div className='card_produto'>
                        <div className='card_produto_imagem'>
                            <img src={Notebook}  />
                        </div>
                        <div className='card_produto_preco'>
                            <p>Notebook</p>
                            <p>R$ 2.500</p>
                            <p className='card_produto_adicionaraocarrinho'>Adicionar ao carrinho</p>
                           
                        </div>
                    </div>
                  
                 
            
            </section>
        
        </div>
    )

}

export default Produtos;