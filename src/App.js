import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Cart from './components/Cart';
import Check from './components/Check';
import Header from "./components/Header";
import Main from './components/Main';
import Menu from './components/Menu';


function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <div className="body">
       
      </div>
      <Routes>
      <Route path="/"  element={<Main/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/check' element={<Check/>}/>
      </Routes>
      </BrowserRouter>
     
    </>
  );
}

export default App;
