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
                 
                  <div className='produto_card'><img src={ssd} alt="" /></div>
                  <p>jsjsj</p>
                  <div className='produto_card'><img src={teclado} alt="" /></div>
                  <p>jsjsj</p>
                  <div className='produto_card'><img src={Notebook} alt="ss"  className='note'/></div>
                  <p>jsjsj</p>

             
         
                  <div className='produto_card'><img src={memoriaRam} alt="" /></div>
                  <p>jsjsj</p>
                  <div className='produto_card'><img src={gabinete} alt="" /></div>
                  <p>jsjsj</p>
                  <div className='produto_card'><img src={headset} alt="" /></div>
                  <p>jsjsj</p>
                 
            
            </section>
        
        </div>
    )

}

export default Produtos;