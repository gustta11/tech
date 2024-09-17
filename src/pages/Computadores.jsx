import './Computadores.css'
import computador1 from '../assets/computador1.png'
import computador2 from '../assets/computador2.png'
import computador3 from '../assets/computador3.png'
import computador4 from '../assets/computador4.png'
import computador5 from '../assets/computador5.png'
import computador6 from '../assets/computador6.png'



const Computadores = () =>{
    return(
        <div>
            <section className='computadores'>

                    <div className='card_computadores'>
                        <div className='card_computadores_imagem'>
                            <img src={computador1}  />
                        </div>
                        <div className='card_computadores_preco'>
                            <p>R$ 2.500  </p>
                            <p>Gabinete</p>
                            <p  className='card_computadores_adicionaraocarrinho' >Adicionar ao carrinho</p>
                        </div>
                    </div>

                    <div className='card_computadores'>
                        <div className='card_computadores_imagem'>
                            <img src={computador2}  />
                        </div>
                        <div className='card_computadores_preco'>
                            <p>R$ 2.500 </p>
                            <p>Headset</p>
                            <p  className='card_computadores_adicionaraocarrinho' >Adicionar ao carrinho</p>
                        </div>
                    </div>

                    <div className='card_produto'>
                        <div  id='memoriaRam'  className='card_computadores_imagem'>
                            <img src={computador3}  />
                        </div>
                        <div className='card_computadores_preco'>
                            <p>R$ 2.500 </p>
                            <p>Memória</p>
                            <p  className='card_computadores_adicionaraocarrinho' >Adicionar ao carrinho</p>
                        </div>
                    </div>

                    <div className='card_produto'>
                        <div  id='memoriaRam'  className='card_computadores_imagem'>
                            <img src={computador4}  />
                        </div>
                        <div className='card_computadores_preco'>
                            <p>R$ 2.500 </p>
                            <p>Memória</p>
                            <p  className='card_computadores_adicionaraocarrinho' >Adicionar ao carrinho</p>
                        </div>
                    </div>

                    <div className='card_produto'>
                        <div  id='memoriaRam'  className='card_computadores_imagem'>
                            <img src={computador5}  />
                        </div>
                        <div className='card_computadores_preco'>
                            <p>R$ 2.500 </p>
                            <p>Memória</p>
                            <p  className='card_computadores_adicionaraocarrinho' >Adicionar ao carrinho</p>
                        </div>
                    </div>

                    <div className='card_produto'>
                        <div  id='memoriaRam'  className='card_computadores_imagem'>
                            <img src={computador6}  />
                        </div>
                        <div className='card_computadores_preco'>
                            <p>R$ 2.500 </p>
                            <p>Memória</p>
                            <p  className='card_computadores_adicionaraocarrinho' >Adicionar ao carrinho</p>
                        </div>
                    </div>
                 
            
            </section>
        
        </div>
    )
}

export default Computadores