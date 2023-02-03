import { CartWidget } from "../CartWidget/CartWidget";
import image from "../NavBar/img/LogoLibro.png";
import './NavBar.css';
import { Link } from "react-router-dom";


export const NavBar = () => {


 

    return (
        <header className='header container-fluid color'>
            <nav className="container navbar navbar-light color ml-3">
                <Link className="navbar-brand" to="#">
                    <img src={image} width="100%" height="60" alt="" />
                </Link>
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/Libros">Más vendidos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Libros/Novelas">Novelas</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Libros/Lenguaje">Lenguaje</Link>

                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Libros/Juvenil" >Juvenil</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="Libros/Autoayuda" >Autoayuda</Link>
                    </li>

                </ul>
              <CartWidget />

            </nav>

        </header>

    )
}

