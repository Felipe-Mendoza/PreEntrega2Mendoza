
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {

  const libro = {
    Autor: "Francisca Solar",
    Formato: "libro fisico",
    Categoria: "Novela histórica",
    Idioma: "Espanol",
    Anio: "2023",

  }
 
  return (
    <div>

      <NavBar />
      <ItemListContainer Autor={libro.Autor} Formato={libro.Formato} Categoria={libro.Categoria} Idioma={libro.Idioma} Anio={libro.Anio} />
      

    </div>

  );
}

export default App;
