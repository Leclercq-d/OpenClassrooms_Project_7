import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Logement from './pages/Logement';
import About from './pages/About';
import E404 from './pages/Error404'
import Header from './components/Header'
import Footer from './components/Footer'

function App (){
  return(
    <Routes>
      <Route path='/' element={<><Header/><Home/><Footer/></>}/>
      <Route path='/about' element={<><Header/><About/><Footer/></>}/>
      <Route path='/logement' element={<><Header/><Logement/><Footer/></>}/>
      <Route path='*' element={<><Header/><E404/><Footer/></>}/>
    </Routes>
  )
}

export default App