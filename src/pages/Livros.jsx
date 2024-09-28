import './Livros.css'
import livro1 from '../assets/livro1.png'
import livro2 from '../assets/livro2.png'
import livro3 from '../assets/livro3.png'
import livro4 from '../assets/livro4.png'
import livro5 from '../assets/livro5.png'
import livro6 from '../assets/livro6.png'



const Livros = () =>{
    return(
        <div>
            <section className='livros'>

                    <div className='card_livros'>
                        <div className='card_livros_imagem'>
                            <img src={livro1}  alt='Livro Html, csss e JavaScript'/>
                        </div>
                        <div className='card_livros_preco'>
                            <p>R$ 2.500  </p>
                            <p>Gabinete</p>
                            <p  className='card_livros_adicionaraocarrinho' >Adicionar ao carrinho</p>
                        </div>
                    </div>

                    <div className='card_livros'>
                        <div className='card_livros_imagem'>
                            <img src={livro2} alt='Livro Html e css para iniciantes' />
                        </div>
                        <div className='card_livros_preco'>
                            <p>R$ 2.500  </p>
                            <p>Gabinete</p>
                            <p  className='card_livros_adicionaraocarrinho' >Adicionar ao carrinho</p>
                        </div>
                    </div>


                    <div className='card_livros'>
                        <div className='card_livros_imagem'>
                            <img src={livro3} alt='Livro de Java com exercicios' />
                        </div>
                        <div className='card_livros_preco'>
                            <p>R$ 2.500  </p>
                            <p>Gabinete</p>
                            <p  className='card_livros_adicionaraocarrinho' >Adicionar ao carrinho</p>
                        </div>
                    </div>


                    <div className='card_livros'>
                        <div className='card_livros_imagem'>
                            <img src={livro4} alt='Livro de algoritmos' />
                        </div>
                        <div className='card_livros_preco'>
                            <p>R$ 2.500  </p>
                            <p>Gabinete</p>
                            <p  className='card_livros_adicionaraocarrinho' >Adicionar ao carrinho</p>
                        </div>
                    </div>

                    <div className='card_livros'>
                        <div className='card_livros_imagem'>
                            <img src={livro5}  alt='Livro de java'/>
                        </div>
                        <div className='card_livros_preco'>
                            <p>R$ 2.500  </p>
                            <p>Gabinete</p>
                            <p  className='card_livros_adicionaraocarrinho' >Adicionar ao carrinho</p>
                        </div>
                    </div>


                    <div className='card_livros'>
                        <div className='card_livros_imagem'>
                            <img src={livro6} alt='Livro sobre react' />
                        </div>
                        <div className='card_livros_preco'>
                            <p>R$ 2.500  </p>
                            <p>Gabinete</p>
                            <p  className='card_livros_adicionaraocarrinho' >Adicionar ao carrinho</p>
                        </div>
                    </div>

                 
            
            </section>
        
        </div>
    )
}

export default Livros;