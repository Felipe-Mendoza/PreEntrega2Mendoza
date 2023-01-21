import './ItemCount.css';

export const ItemCount = ({ cantidad, setCantidad, max, onAdd }) => {

    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }
    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    return (


        <div className="container counter">
            <div>
                <div className="btn__container">
                    <button onClick={handleRestar} className="btn btn-outline-primary control__btn">-</button>
                    <span className='mx-3'>{cantidad}</span>
                    <button onClick={handleSumar} className="btn btn-outline-primary control__btn">+</button>
                    <br />
                    <button onClick={onAdd} className="btn btn-success">Agregar carrito</button>

                </div>
            </div>
            <div>Stock: {max}</div>

        </div>




    )
}