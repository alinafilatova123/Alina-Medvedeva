import { Route, Routes } from 'react-router-dom';
import {Header, Nav, Works, About, Contact, Footer} from '././components/import'
import {SaratovVolga, Shef, Yaroslav, Dron} from '../src/pages/import'
function Main(){
  return(
    <>
      <Nav/>
      <Header/>
      <Works/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  )
}


function App() {

  return (
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='saratovvolga' element={<SaratovVolga/>}/>
      <Route path='shef' element={<Shef/>}/>
      <Route path='yaroslav' element={<Yaroslav/>}/>
      <Route path='dron' element={<Dron/>}/>
    </Routes>
  );
}

export default App;
