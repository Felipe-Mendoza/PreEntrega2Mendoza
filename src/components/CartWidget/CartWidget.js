import carrito from "../CartWidget/img/carrito-de-compras.png";
import './CartWidget.css';
export const CartWidget = () => {

    return (
        <div className="carrito">
            <span><p className="contador">0</p></span>
            <img src={carrito} width="15%" height="30" alt="" />
        </div>
    )
}