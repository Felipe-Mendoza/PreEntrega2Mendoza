import { useContext, useState } from "react";
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext";
import './ItemList.css';


const ItemList = ({ productos }) => {
    const { agregarAlCarrito, isInCart } = useContext(CartContext)
    const [cantidad, setCantidad] = useState(1)

    const items = {
        id: "",
        Autor: "",
        Titulo: "",
        Formato: "",
        Categoria: "",
        Idioma: "",
        stock: "",
        imagen: "",
        cantidad: "",
        precio: ""
    }

  

    const handleAgregar = (prod) => {
      
       
        agregarAlCarrito({...prod,cantidad})


    }


    return (
        <div className="container my-5">

            <h2>Libros</h2>
            <hr />

            <section className="row my-4 mb-4">
                {productos.map((prod => (


                    items.id = prod.id,
                    items.Autor = prod.Autor,
                    items.Titulo = prod.Titulo,
                    items.Formato = prod.Formato,
                    items.Categoria = prod.Categoria,
                    items.Idioma = prod.Idioma,
                    items.stock = prod.stock,
                    items.imagen = prod.imagen,
                    items.precio = prod.precio,



                    < div key={items.id} className="card col-3 m-3 container" >

                        <div className="card-details">
                            <div>
                                <img src={items.imagen} alt={items.Autor} width="100%" />
                            </div>
                            <div>
                                <h6 className="Titulo"> {items.Titulo} </h6>
                                <p className="Color-gris">Autor: {items.Autor} </p>
                                <hr />
                                <p className="Color-gris">Categoria: {items.Categoria}</p>
                                <strong>Precio: ${items.precio} </strong>
                            </div>

                        </div>


                        {!isInCart(items.id) ?
                            <>
                                <button onClick={() => handleAgregar(prod)} className="card-button-carrito">Agregar carrito</button>

                                <Link to={`/detail/${items.id}`} className="card-button rounded-bottom">Ver más</Link>
                            </>
                            :
                            <>

                                <Link to={`/detail/${items.id}`} className="card-button-carrito">Ver carrito</Link>
                                <div className="card-button-green rounded-bottom">Agregado</div>
                            </>
                        }


                    </div>


                )))
                }
            </section >
        </div >
    )
}
export default ItemList
