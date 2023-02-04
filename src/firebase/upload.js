
import data from '../data/data.json' assert {type: "json"}
import { db } from "./config.js";
import { collection , addDoc } from "firebase/firestore";

data.forEach(item => delete item.id)
const productosRef= collection(db,'Libros')

data.forEach(item=>{
    addDoc(productosRef,item)
}
    )

