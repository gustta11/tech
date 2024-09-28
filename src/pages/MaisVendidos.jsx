import './MaisVendidos.css'
import ssd from '../assets/ssd.png'
import gabinete from '../assets/gabinete.png'
import livro1 from '../assets/livro1.png'
import memoriaRam from '../assets/memoriaRam.png'
import livro2 from '../assets/livro2.png'
import headset from '../assets/head.png'



const MaisVendidos = () =>{
    return(
        <div>
            <section className='MaisVendidos'>

                    <div className='card_MaisVendidos'>
                        <div className='card_MaisVendidos_imagem'>
                            <img src={gabinete} alt='Gabinete gamer' />
                        </div>
                        <div className='card_MaisVendidos_preco'>
                            <p>R$ 2.500  </p>
                            <p>Gabinete</p>
                            <p  className='card_MaisVendidos_adicionaraocarrinho' >Adicionar ao carrinho</p>
                        </div>
                    </div>

                    <div className='card_MaisVendidos'>
                        <div className='card_MaisVendidos_imagem'>
                            <img src={ssd} alt='SSD' />
                        </div>
                        <div className='card_MaisVendidos_preco'>
                            <p>R$ 2.500  </p>
                            <p>Gabinete</p>
                            <p  className='card_MaisVendidos_adicionaraocarrinho' >Adicionar ao carrinho</p>
                        </div>
                    </div>

                    <div className='card_MaisVendidos'>
                        <div className='card_MaisVendidos_imagem'>
                            <img src={livro1} alt='Livro de html, css e JavaScript' />
                        </div>
                        <div className='card_MaisVendidos_preco'>
                            <p>R$ 2.500  </p>
                            <p>Gabinete</p>
                            <p  className='card_MaisVendidos_adicionaraocarrinho' >Adicionar ao carrinho</p>
                        </div>
                    </div>
                    <div className='card_MaisVendidos'>
                        <div className='card_MaisVendidos_imagem'>
                            <img src={memoriaRam} alt='MemoriaRam' />
                        </div>
                        <div className='card_MaisVendidos_preco'>
                            <p>R$ 2.500 </p>
                            <p>Gabinete</p>
                            <p  className='card_MaisVendidos_adicionaraocarrinho' >Adicionar ao carrinho</p>
                        </div>
                    </div>

                    <div className='card_MaisVendidos'>
                        <div className='card_MaisVendidos_imagem'>
                            <img src={livro2}  alt='Livro Html e css'/>
                        </div>
                        <div className='card_MaisVendidos_preco'>
                            <p>R$ 2.500  </p>
                            <p>Gabinete</p>
                            <p  className='card_MaisVendidos_adicionaraocarrinho' >Adicionar ao carrinho</p>
                        </div>
                    </div>
                    <div className='card_MaisVendidos'>
                        <div className='card_MaisVendidos_imagem'>
                            <img src={headset}  alt='Headset'/>
                        </div>
                        <div className='card_MaisVendidos_preco'>
                            <p>R$ 2.500  </p>
                            <p>Gabinete</p>
                            <p  className='card_MaisVendidos_adicionaraocarrinho' >Adicionar ao carrinho</p>
                        </div>
                    </div>
                 
            
            </section>
        
        </div>
    )
}

export default MaisVendidos;