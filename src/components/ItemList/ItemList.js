import { Link } from "react-router-dom"
import { ItemCount } from "../ItemCount/ItemCount";
import './ItemList.css';


const ItemList = ({ productos }) => {


    return (
        <div className="container my-5">

            <h2>Libros</h2>
            <hr />

            <section className="row my-4 mb-4">
                {productos.map((prod => (


                    <div key={prod.id} className="card col-3 m-3 container">

                        <div className="card-details">
                            <div>
                                <img src={prod.imagen} alt={prod.Autor} width="100%" />
                            </div>
                            <div>
                                <h6 className="Titulo"> {prod.Titulo} </h6>
                                <p className="Color-gris">Autor: {prod.Autor} </p>
                                <hr />
                                <p className="Color-gris">Categoria: {prod.Categoria}</p>
                                <strong>Precio: ${prod.precio} </strong>
                            </div>

                        </div>

                        <button className="card-button-carrito">Agregar carrito</button>
                        <Link to={`/detail/${prod.id}`} className="card-button rounded-bottom">Ver más</Link>
                    </div>


                )))}
            </section>
        </div>
    )
}
export default ItemList
