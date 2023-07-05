import './App.css';
import Header from './component/Header/Header';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './component/MainHome/Home';
import Account from './component/account/Account';
import Footer from './component/footer/Footer';
import Login from './component/LoginAndRegister/Login';
import Register from './component/LoginAndRegister/Register';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/account' element={<Account/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
