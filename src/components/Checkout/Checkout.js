import { useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import { db } from "../../firebase/config"
import { collection, addDoc, doc } from "firebase/firestore"

const Checkout = () => {
    const { cart, totalCart, emptycart } = useCartContext()

    const [ordenId, setOrdenId] = useState(null)

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
        //Validacion
        if (values.nombre.length < 2) {
            alert("Nombre Invalido")
            return
        }
        if (values.direccion.length < 2) {
            alert("Direccion Invalida")
            return
        }
        if (values.email.length < 2) {
            alert("email Invalido")
            return
        }
        const orden = {
            cliente: values,
            items: cart,
            total: totalCart()
        }


        const ordenesRef = collection(db, "Ordenes")
        addDoc(ordenesRef, orden)
            .then((doc) => {
                setOrdenId(doc.id)
                emptycart()

            })
            .catch((error) => console.log(error))
    }
    if (ordenId) {
        return (
            <div className="container my-5">
                <h2>Tu compra sido exitosa</h2>
                <p>Tu codigo de orden es:{ordenId}</p>
                <Link to="/">Volver</Link>

            </div>

        )
    }

    if (cart.length === 0) {
        return <Navigate to="/" />
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