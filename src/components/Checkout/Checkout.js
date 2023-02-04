import { useState } from "react"
import { useCartContext } from "../../context/CartContext"

const Checkout = () => {
    const { cart, totalCart } = useCartContext()

    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const orden = {
            cliente: values,
            items: cart,
            total: totalCart()
        }


        console.log(orden)
    }


    return (

        <div className="container my-5">
            <h2>Termina mi compra</h2>
            <hr />

            <form onSubmit={handleSubmit}>
                <input
                    className="form-control my-2"
                    onChange={handleInputChange}
                    type="text"
                    name="nombre"
                    value={values.nombre}
                    placeholder="tu nombre"
                />
                <input
                    className="form-control my-2"
                    onChange={handleInputChange}
                    type="text"
                    name="direccion"
                    value={values.direccion}
                    placeholder="tu direccion"
                />
                <input
                    className="form-control my-2"
                    onChange={handleInputChange}
                    type="email"
                    name="email"
                    value={values.email}
                    placeholder="tu email"
                />
                <button className="btn btn-primary">Enviar</button>


            </form>

        </div>
    )
}
export default Checkout