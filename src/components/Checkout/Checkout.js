import { useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import { db } from "../../firebase/config"
import { collection, addDoc } from "firebase/firestore"
import { useFormik } from "formik"
import './Checkout.css';

const Checkout = () => {
    const { cart, totalCart, emptycart } = useCartContext()

    const [ordenId, setOrdenId] = useState(null)

    const validate = values => {

        const errors = {};
        if (!values.nombre) {
            errors.nombre = 'Por favor ingresa un nombre'
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombre)) {
            errors.nombre = 'El nombre solo puede contener letras y espacios'
        }

        if (!values.apellidp) {
            errors.apellidp = 'Por favor ingresa un apellido'
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.apellidp)) {
            errors.apellidp = 'El apellido solo puede contener letras y espacios'
        }

        if (!values.direccion) {
            errors.direccion = 'Por favor ingresa una dirección'
        }

        if (!values.telefono) {
            errors.telefono = 'Por favor ingresa un numero telefonico'
        } else if (!/^[0-9]+$/.test(values.telefono)) {
            errors.telefono = 'El número telefonico solo puede contener números'
        }

        //Validacion correo
        if (!values.email) {
            errors.email = 'Por favor ingresa un email'
        } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
            errors.email = 'El formato correcto será usuario@email.com'
        }


        return errors;
    }

    const formik = useFormik({
        initialValues: { nombre: '', apellidp: '', direccion: '', telefono: '', email: '' },
        validate,
        onSubmit: values => {
            console.log(values)
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
    })


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

                    <form onSubmit={formik.handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                type="text"
                                className="form-control"
                                id="name"
                                name="nombre"
                                placeholder="Ingrese su nombre"
                                value={formik.values.nombre}
                            />


                            {formik.touched.nombre && formik.errors.nombre ? (
                                <div className="errors"> {formik.errors.nombre} </div>
                            ) : null}




                        </div>
                        <div className="mb-3">
                            <label className="form-label">Apellido</label>
                            <input
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                type="text"
                                className="form-control"
                                id="apellido"
                                name="apellidp"
                                placeholder="Ingrese su Apellido"
                                value={formik.values.apellidp}
                            />
                            {formik.touched.apellidp && formik.errors.apellidp ? (
                                <div className="errors"> {formik.errors.apellidp} </div>
                            ) : null}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Dirección</label>
                            <input
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                type="text"
                                className="form-control"
                                id="direccion"
                                name="direccion"
                                placeholder="Ingrese su dirección"
                                value={formik.values.direccion}
                            />
                            {formik.touched.direccion && formik.errors.direccion ? (
                                <div className="errors"> {formik.errors.direccion} </div>
                            ) : null}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Teléfono</label>
                            <input
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                type="text"
                                className="form-control"
                                id="telefono"
                                name="telefono"
                                placeholder="Ingrese su telefono"
                                value={formik.values.telefono}
                            />
                            {formik.touched.telefono && formik.errors.telefono ? (
                                <div className="errors"> {formik.errors.telefono} </div>
                            ) : null}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">E-mail</label>
                            <input
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                type="text"
                                className="form-control"
                                id="email"
                                name="email"
                                placeholder="Ingrese su email"
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="errors"> {formik.errors.email} </div>
                            ) : null}
                        </div>
                        <input type="submit" className="btn btn-primary" value="Enviar" />


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