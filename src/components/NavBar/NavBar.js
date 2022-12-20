import { CartWidget } from "../CartWidget/CartWidget";
import image from "../NavBar/img/LogoLibro.png";
import './NavBar.css';
export const NavBar = () => {

    return (
        <header className='header container-fluid color'>
            <nav className="container navbar navbar-light color ml-3">
                <a className="navbar-brand" href="#">
                    <img src={image} width="100%" height="60" alt="" />
                </a>
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Más vendidos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Actualidad</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Novelas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Infantil</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Juvenil</a>
                    </li>
                </ul>
                <CartWidget/>
            </nav>
            
        </header>

    )
}

