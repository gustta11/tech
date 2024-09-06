
import './App.css'
import Nav from './layout/Nav'
import Footer from './layout/Footer'
import{ BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom';
import Produtos from './components/Produtos'
import Ofertas from './paginas/Ofertas'
import MaisVendidos from './paginas/MaisVendidos'
import Livros from './paginas/Livros'
import Computadores from './paginas/Computadores'

function App() {
  

  return (

    <Router>
      <div className='grid'>

        <header>
          <Nav/>
        </header>

        <main>
        <Routes>
              <Route path='/*' element={<Produtos/>}/>
              <Route path='/Ofertas' element={<Ofertas/>}/>
              <Route path='/MaisVendidos'element={<MaisVendidos/>}/>
              <Route path='/Livros' element={<Livros/>}/>
              <Route path='/Computadores'element={<Computadores/>}/>
            </Routes>
        </main>

        <footer>

          <Footer/>

        </footer>


      </div>
      </Router>
  )
}

export default App
