import { useNavigate } from "react-router-dom"
import { ItemCount } from "../ItemCount/ItemCount"




const ItemDetail = ({ id, Autor, Titulo, Formato, Categoria, Idioma, Anio, imagen, stock, precio }) => {
    const navigate = useNavigate()
    const handleVolver = () => {
        navigate(-1)
    }
    return (
        <div>
            <div className="text-center">
                <div className="row justify-content-center">
                    <div className="col-md-5 align-self-center p-3">
                        <img src={imagen} alt={Autor} className="img-fluid" />

                    </div>

                    <div className="col-md-3 offset-md-1 align-self-center">
                        <h2>{Titulo}</h2>
                        <h5>${precio}</h5>
                        <ItemCount inicial={0} stock={stock} />
                        <button className="btn btn-success">Agregar carrito</button>
                    </div>
                </div>

            </div>
            <button className="btn btn-primary" onClick={handleVolver}>Volver</button>
        </div>

    )

}
export default ItemDetail