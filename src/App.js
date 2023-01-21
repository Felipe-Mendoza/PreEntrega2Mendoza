
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Contacto from './components/Contacto/Contacto';


function App() {



  return (

    <BrowserRouter>
      <NavBar />
      
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
       
        <Route path='/Libros/:categoryId' element={<ItemListContainer />} />
        <Route path='/detail/:itemId' element={<ItemDetailContainer />} />
        <Route path='/contacto' element={<Contacto/>} />
        <Route path='*' element={<Navigate to={"/"} />} />
       

      </Routes>
      
    </BrowserRouter>


  );
}

export default App;
