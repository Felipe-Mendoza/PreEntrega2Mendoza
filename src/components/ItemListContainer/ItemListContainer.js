import foto from "../ItemListContainer/padreRico.webp";
import './ItemListContainer.css';

export const ItemListContainer = (libro) => {
    return (

        <div className="card">
            <img src={foto} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Autor: {libro.Autor}</h5>
                    <p className="card-text">Formato: {libro.Formato}</p>
                    <p className="card-text">Categoria: {libro.Categoria}</p>
                    <p className="card-text">Idioma: {libro.Idioma}</p>
                    <p className="card-text">Año: {libro.Anio}</p>
                    <a href="#" className="btn btn-primary">revisar</a>
                </div>
        </div>
        

    )
}



