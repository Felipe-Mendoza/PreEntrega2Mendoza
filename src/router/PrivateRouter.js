import { NavBar } from '../components/NavBar/NavBar';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import Contacto from '../components/Contacto/Contacto';
import Cart from '../components/Cart/Cart';
import { Routes, Route, Navigate  } from 'react-router-dom';

const PrivateRoutes = () => {


    return (

        <>
            <NavBar />

            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/Libros/:categoryId' element={<ItemListContainer />} />
                <Route path='/detail/:itemId' element={<ItemDetailContainer />} />
                <Route path='/contacto' element={<Contacto />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='*' element={<Navigate to={"/"} />} />
            </Routes>
        </>


    )
}
export default PrivateRoutes