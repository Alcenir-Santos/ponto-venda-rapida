import FormaPagamento from 'Pages/FormaPagamento';
import Home from 'Pages/Home';
import Login from 'Pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/formapagamento'>
          <Route path=':amount' element={<FormaPagamento />}/>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
