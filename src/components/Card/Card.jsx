import style from "./Card.module.css"
import { Link } from "react-router-dom";

export default function Card({ id, name, species, gender, image, onClose }) {
   return (
      <div className={style.container}>
         <button onClick={()=> {onClose(id)}} className={style.btn}>X</button>
         <Link to={`/detail/${id}`} >
         <h2>  {'Name: ' + name} </h2>
         </Link>
         <div className={style.containerTitle}>
            <h2> {'Specie: ' + species}</h2>
            <h2> {'Gender: ' + gender}</h2>
         </div>
         <img  src={image} alt={name} className={style.image} />
      </div>
   );
}

