import foto from "../ItemListContainer/padreRico.webp";
import Card from 'react-bootstrap/Card';
export const ItemListContainer = (libro) => {
    return (

        <Card className="card bg-dark text-white mt-2 m-5" style={{ width: '15rem' }}>
            <Card.Img variant="top" src={foto} />
            <Card.Body>
                <Card.Title>
                    <h5>Autor: {libro.Autor}</h5>
                    <p>Formato: {libro.Formato}</p>
                    <p>Categoria: {libro.Categoria}</p>
                    <p>Idioma: {libro.Idioma}</p>
                    <p>Año: {libro.Anio}</p>

                </Card.Title>


            </Card.Body>
        </Card>

    )
}