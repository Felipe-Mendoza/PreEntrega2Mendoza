import { useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import { db } from "../../firebase/config"
import { collection, addDoc, doc } from "firebase/firestore"
import { Formik, Form, Field, ErrorMessage } from "formik"

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
    const handleSubmit = (e) => {

        //Validacion

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
    return (
        <div className="container checkout">
            <div className="row my-5">
                <div className="col-md-6 my-2 pe-5 ps-5 inputs">

                    <h2>Termina mi compra</h2>
                    <hr />



                    <Formik
                        initialValues={{
                            nombre: '',
                            apellido: '',
                            telefono:'',
                            direccion:'',
                            correo: '',

                        }}
                        validate={(valores) => {
                            let errores = {};
                            //Validacion nombre
                            if (!valores.nombre) {
                                errores.nombre = 'Por favor ingresa un nombre'
                            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                                errores.nombre = 'El nombre solo puede contener letras y espacios'
                            }

                            //Validacion apellido
                            if (!valores.apellido) {
                                errores.apellido = 'Por favor ingresa un apellido'
                            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellido)) {
                                errores.nombre = 'El apellido solo puede contener letras y espacios'
                            }
                            //Validacion telefono

                            //Validacion correo
                            if (!valores.email) {
                                errores.email = 'Por favor ingresa un nombre'
                            } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
                                errores.email = 'El email solo puede contener letras, numeros, puntos, guiones y guion bajo '
                            }



                            return errores;

                        }
                        }
                        onSubmit={handleSubmit}

                    >
                        {
                            ({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (


                                <Form>
                                    <div className="mb-3">
                                        <label htmlFor="nombre" className="form-label">Nombre</label>
                                        <Field

                                            type="text"
                                            className="form-control"
                                            id="name"
                                            name="nombre"
                                            placeholder="Ingrese su nombre"

                                        />
                                        <ErrorMessage name="nombre" component={() => (

                                            <div className="error"> {errors.nombre} </div>
                                        )} />

                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="apellido" className="form-label">Apellido</label>
                                        <Field
                                            type="text"
                                            className="form-control"
                                            id="apellido"
                                            name="apellido"
                                            placeholder="Ingrese su Apellido"
                                            value={values.apellido}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />

                                        {errors.apellido && <div className="error">
                                            {errors.apellido}
                                        </div>}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="direccion" className="form-label">Dirección</label>
                                        <Field

                                            type="text"
                                            className="form-control"
                                            id="direccion"
                                            name="direccion"
                                            placeholder="Ingrese su dirección"
                                            value={values.direccion}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errors.direccion && <div className="error">
                                            {errors.direccion}
                                        </div>}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="telefono" className="form-label">Teléfono</label>
                                        <Field

                                            type="text"
                                            className="form-control"
                                            id="telefono"
                                            name="telefono"
                                            placeholder="Ingrese su telefono"
                                            value={values.telefono}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errors.telefono && <div className="error">
                                            {errors.telefono}
                                        </div>}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">E-mail</label>
                                        <Field

                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            placeholder="Ingrese su email"
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errors.email && <div className="error">
                                            {errors.email}
                                        </div>}
                                    </div>
                                    <button className="btn btn-primary" type="submit">Enviar</button>


                                </Form>


                            )
                        }

                    </Formik>
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