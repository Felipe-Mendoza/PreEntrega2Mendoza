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
            <div className="container">
                <div className="row my-4 justify-content-center">
                    <div className="col-md-12 align-middle text-center m-3">
                        <h2>Gracias por tu compra!</h2>
                        {ordenId && <div className="alert alert-success" role="alert">Orden generada: <b>{ordenId}</b></div>}


                    </div>
                    <Link to="/" className="col-md-2 btn btn-primary align-self-center text-center m-3 mb-2">Ir a inicio</Link>
                </div>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/" />
    }

    return (
        <div className="container checkout">
            <div className="row my-5">
                <div className="col-md-6 my-2 pe-5 ps-5 inputs">

                    <h2>Termina mi compra</h2>
                    <hr />

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input
                                onChange={handleInputChange}
                                type="text"
                                className="form-control"
                                id="name"
                                name="nombre"
                                placeholder="Ingrese su nombre"
                                value={values.nombre}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Apellido</label>
                            <input
                                onChange={handleInputChange}
                                type="text"
                                className="form-control"
                                id="apellido"
                                name="apellidp"
                                placeholder="Ingrese su Apellido"
                                value={values.apellido}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Dirección</label>
                            <input
                                onChange={handleInputChange}
                                type="text"
                                className="form-control"
                                id="direccion"
                                name="direccion"
                                placeholder="Ingrese su dirección"
                                value={values.direccion}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Teléfono</label>
                            <input
                                onChange={handleInputChange}
                                type="text"
                                className="form-control"
                                id="telefono"
                                name="telefono"
                                placeholder="Ingrese su telefono"
                                value={values.telefono}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">E-mail</label>
                            <input
                                onChange={handleInputChange}
                                type="text"
                                className="form-control"
                                id="email"
                                name="email"
                                placeholder="Ingrese su email"
                                value={values.email}
                            />
                        </div>
                        <button className="btn btn-primary">Enviar</button>


                    </form>
                </div>
                <div className="col-md-6">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">&nbsp;</th>
                                <th scope="col">Producto</th>
                                <th scope="col" className="text-center">Cantidad</th>
                                <th scope="col" className="text-center">Precio</th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(product => (
                                <tr key={product.id}>
                                    <td className="align-middle text-center"><img src={product.imagen} alt={product.Autor} width="20%" /></td>
                                    <td className="align-middle">{product.Titulo}</td>
                                    <td className="align-middle text-center">{product.cantidad}</td>
                                    <td className="align-middle text-center">$ {product.cantidad * product.precio}</td>
                                </tr>
                            ))}
                            <tr>
                                <td></td>
                                <td></td>
                                <td className="text-end"><b>Total a Pagar</b></td>
                                <td className="text-center"><b>$ {totalCart()}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>


        </div>

    )
}
export default Checkout