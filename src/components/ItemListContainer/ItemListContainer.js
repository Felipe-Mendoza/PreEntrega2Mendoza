import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import { Loader } from "../Loader/Loader";


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()
    console.log(productos)

    useEffect(() => {
        setLoading(true)

        //1) referencia
        const productosRef = collection(db, "Libros")
        const q = categoryId
            ? query(productosRef, where("Categoria", "==", categoryId))
            : productosRef


        //2) peticion asincronica quedamos en el minuto 1:25
        getDocs(q)
            .then((resp) => {

                //    setProductos(resp.docs.map((doc) => doc.data())) 
                //    console.log(resp.docs.map((doc) => doc.data()))
                //    console.log(resp.docs.map((doc) => doc.id))
                setProductos(resp.docs.map((doc) => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }

                }))
            })
            .finally(() => {

                setLoading(false)
            })



    }, [categoryId])


    return (
        <div>

            {
                loading
                    ? <div className="loader">
                        <Loader type={"balls"} color={"#0095ff"} />
                    </div>
                    : <ItemList productos={productos} />
            }
        </div>


    )
}
export default ItemListContainer


