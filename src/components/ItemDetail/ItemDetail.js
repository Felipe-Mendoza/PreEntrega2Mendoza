import { Link, useNavigate } from "react-router-dom"
import { ItemCount } from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
const ItemDetail = ({ id, Autor, Titulo, Formato, Categoria, Idioma, Anio, imagen, stock, precio }) => {

    const { agregarAlCarrito, isInCart } = useContext(CartContext)
    console.log(isInCart(id))
    const [cantidad, setCantidad] = useState(1)
    const navigate = useNavigate()
    const handleVolver = () => {
        navigate(-1)
    }

    const handleAgregar = () => {
        const item = {
            id,
            Autor,
            Titulo,
            Formato,
            Categoria,
            Idioma,
            stock,
            imagen,
            cantidad,
            precio

        }
        agregarAlCarrito(item)

    }
    return (
        <>
            <div>
                <div className="text-center">
                    <div className="row justify-content-center">
                        <div className="col-md-5 align-self-center p-3">
                            <img src={imagen} alt={Autor} className="img-fluid" />

                        </div>

                        <div className="col-md-3 offset-md-1 align-self-center">
                            <h2>{Titulo}</h2>
                            <h5>${precio}</h5>
                            {stock <= 20 && <h5>Ultimas unidades</h5>}
                            {
                                !isInCart(id)
                                    ? <ItemCount
                                        cantidad={cantidad}
                                        setCantidad={setCantidad}
                                        max={stock}
                                        onAdd={handleAgregar} />
                                    : <Link to="/cart" className="btn btn-success">Ir a carrito</Link>
                            }


                        </div>
                    </div>

                </div>

            </div>


            <div className="row">
                <h2>Reseña del libro "{Titulo}"</h2>
            </div>
            <button className="btn btn-primary" onClick={handleVolver}>Volver</button>

        </>




    )






}
export default ItemDetail