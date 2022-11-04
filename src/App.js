import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Cart from './components/Cart';
import Check from './components/Check';
import Header from "./components/Header";
import Main from './components/Main';
import Menu from './components/Menu';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
 
  return (
    <>
    <div className="rohan">
     
    <BrowserRouter> 
      <Header/>
      <div className="body">
      
      </div>
      <Routes>
      <Route path="/"  element={<Signup/>}/>
      <Route path="/login"  element={<Login/>}/>
      <Route path="/main"  element={<Main/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/check' element={<Check/>}/>
      </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
