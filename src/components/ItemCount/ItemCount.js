import './ItemCount.css';
import { useState } from "react"
export const ItemCount = ({ inicial, stock }) => {
    let [counter, setCounter] = useState(inicial)

    const sumar = () => {
        setCounter(counter + 1)
    }
    const restar = () => {
        setCounter(counter - 1)
    }

    return (


        <div className="container counter">
            <div>
                <div className="btn__container">
                    <button className="btn btn-outline-primary control__btn" disabled={counter <= 1} onClick={restar}>-</button>
                    <p>{counter}</p>
                    <button className="btn btn-outline-primary control__btn" disabled={counter >= stock} onClick={sumar}>+</button>

                   
                </div>
            </div>
            <div>Stock: {stock}</div>

        </div>




    )
}