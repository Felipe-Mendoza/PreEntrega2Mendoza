import './ItemCount.css';

export const ItemCount = ({ cantidad, setCantidad, max, onAdd }) => {

    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }
    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    return (


        <div className="container counter row mb-2">
            <div>
                <div className="btn__container col mb-2 text-center">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button onClick={handleRestar}
                            className={`btn ${cantidad > 1 ? 'btn btn-outline-primary' : 'btn btn-outline-danger'}`}
                            disabled={cantidad === 1}
                        >
                            -
                        </button>
                        <span className='mx-3'>{cantidad} {cantidad === 1 ? "Unidad" : "Unidades"}</span>
                        <button onClick={handleSumar}
                            className={cantidad < max ? 'btn btn-outline-primary' : 'btn btn-outline-danger'}
                            disabled={cantidad === max}
                        >
                            +
                        </button>
                        <br />
                        
                    </div>
               

                </div>
                <button onClick={onAdd} className="btn btn-success">Agregar carrito</button>
                <div>Stock: {max}</div>

            </div>
            </div>

            


    )
}