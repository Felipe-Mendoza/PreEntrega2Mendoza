import image from "../img/LogoLibro.png";
import './NavBar.css';
export const NavBar = () => {

    return (
        <header className='header'>
            <nav className="navbar navbar-light color ml-3">
                <a className="navbar-brand" href="#">
                    <img src={image} width="100%" height="60" alt="" />
                </a>
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Disabled</a>
                    </li>
                </ul>
            </nav>
        </header>

    )
}

