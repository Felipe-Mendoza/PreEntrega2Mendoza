import { Link } from "react-router-dom"


const ItemList = ({ productos }) => {

    return (
        <div className="container my-5">

            <h2>Libros</h2>
            <hr />
            <section className="row my-4">
                {productos.map((prod => (
                    <div key={prod.id} className="col-3 m-2 container">
                        <img src={prod.imagen} alt={prod.Autor} />
                        <h3> {prod.Titulo} </h3>
                        <p>Autor: {prod.Autor} </p>
                        <p>Formato: {prod.Formato}</p>
                        <p>Categoria: {prod.Categoria}</p>
                        <p>Año: {prod.Anio}.</p>
                        <h2>Precio: ${prod.precio} </h2>



                        <Link to= {`/detail/${prod.id}`} className="btn btn-primary">ver mas</Link>
                    </div>


                )))}
            </section>
        </div>
    )
}
export default ItemList
