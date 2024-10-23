import './App.css'
import Feature from './components/Feature/Feature'
import Navbar from './components/Navbar/Navbar'
import PriceOptions from './components/PriceOptions/PriceOptions'
// import DaisyNav from './components/DaisyNav/DaisyNav'


function App() {

  return (
    <>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-7xl text-center bg-red-600'>Vite + React</h1>

      <PriceOptions></PriceOptions>
      <Feature></Feature>
      
    </>
  )
}

export default App
