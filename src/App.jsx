
import './App.css'
import Nav from './layout/Nav'
import Footer from './layout/Footer'
import Produtos from './components/Produtos'

function App() {
  

  return (
      <div className='grid'>

        <header>
          <Nav/>
        </header>

        <main>
            <Produtos/>
        </main>

        <footer>

          <Footer/>

        </footer>


      </div>
  )
}

export default App
