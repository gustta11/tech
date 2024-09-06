import './Computadores.css'



const Computadores = () =>{
    return(
        <div>
            <section className='computadores'>

                    <div className='card_computadores'>
                        <div className='card_computadores_imagem'>
                            <img src={gabinete}  />
                        </div>
                        <div className='card_computadores_preco'>
                            <p>R$ 2.500 <span>De: R$4.000</span> </p>
                            <p>Gabinete</p>
                            <p  className='card_computadores_adicionaraocarrinho' >Adicionar ao carrinho</p>
                        </div>
                    </div>

                    <div className='card_computadores'>
                        <div className='card_computadores_imagem'>
                            <img src={headset}  />
                        </div>
                        <div className='card_computadores_preco'>
                            <p>R$ 2.500 <span>De: R$4.000</span></p>
                            <p>Headset</p>
                            <p  className='card_computadores_adicionaraocarrinho' >Adicionar ao carrinho</p>
                        </div>
                    </div>

                    <div className='card_produto'>
                        <div  id='memoriaRam'  className='card_computadores_imagem'>
                            <img src={memoriaRam}  />
                        </div>
                        <div className='card_computadores_preco'>
                            <p>R$ 2.500 <span>De: R$4.000</span></p>
                            <p>Memória</p>
                            <p  className='card_computadores_adicionaraocarrinho' >Adicionar ao carrinho</p>
                        </div>
                    </div>

                    <div className='card_produto'>
                        <div  id='memoriaRam'  className='card_computadores_imagem'>
                            <img src={memoriaRam}  />
                        </div>
                        <div className='card_computadores_preco'>
                            <p>R$ 2.500 <span>De: R$4.000</span></p>
                            <p>Memória</p>
                            <p  className='card_computadores_adicionaraocarrinho' >Adicionar ao carrinho</p>
                        </div>
                    </div>

                    <div className='card_produto'>
                        <div  id='memoriaRam'  className='card_computadores_imagem'>
                            <img src={memoriaRam}  />
                        </div>
                        <div className='card_computadores_preco'>
                            <p>R$ 2.500 <span>De: R$4.000</span></p>
                            <p>Memória</p>
                            <p  className='card_computadores_adicionaraocarrinho' >Adicionar ao carrinho</p>
                        </div>
                    </div>

                    <div className='card_produto'>
                        <div  id='memoriaRam'  className='card_computadores_imagem'>
                            <img src={memoriaRam}  />
                        </div>
                        <div className='card_computadores_preco'>
                            <p>R$ 2.500 <span>De: R$4.000</span></p>
                            <p>Memória</p>
                            <p  className='card_computadores_adicionaraocarrinho' >Adicionar ao carrinho</p>
                        </div>
                    </div>
                 
            
            </section>
        
        </div>
    )
}

export default Computadores