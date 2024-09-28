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
                            <img src={gabinete}  alt='gabinete gamer'/>
                        </div>
                        <div className='card_produto_preco'>
                            <p className='preco_oferta'>20%off</p>
                            <p>R$ 2.500  </p>
                            <p>Gabinete</p>
                        </div>
                    </div>

                    <div className='card_produto'>
                        <div className='card_produto_imagem'>
                            <img src={headset} alt='Headset gamer' />
                        </div>
                        <div className='card_produto_preco'>
                            <p className='preco_oferta'>20%off</p>
                            <p>R$ 2.500 </p>
                            <p>Headset</p>
                        </div>
                    </div>

                    <div className='card_produto'>
                        <div  id='memoriaRam'  className='card_produto_imagem'>
                            <img src={memoriaRam}  alt='MemóriaRam '/>
                        </div>
                        <div className='card_produto_preco'>
                            <p className='preco_oferta'>20%off</p>
                            <p>R$ 2.500 </p>
                            <p>Memória</p>
                        </div>
                    </div>

                    <div className='card_produto'>
                        <div className='card_produto_imagem'>
                            <img src={teclado} alt='Teclado Gamer' />
                        </div>
                        <div className='card_produto_preco'>
                            <p>Teclado</p>
                            <p>R$ 2.500</p>
                            <p  className='card_produto_adicionaraocarrinho' >Adicionar ao carrinho</p>
                            
                        </div>
                    </div>

                    <div className='card_produto'>
                        <div className='card_produto_imagem'>
                            <img src={ssd} alt='SSD' />
                        </div>
                        <div className='card_produto_preco'>
                            <p>Ssd</p>
                            <p>R$ 2.500</p>
                            <p className='card_produto_adicionaraocarrinho' >Adicionar ao carrinho</p>
                            
                        </div>
                    </div>

                    <div className='card_produto'>
                        <div className='card_produto_imagem'>
                            <img src={Notebook}  alt='Notebook gamer'/>
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