import style from "./Card.module.css"
import { Link, useLocation } from 'react-router-dom'
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useEffect, useState } from "react";


function Card({ id, name, species, gender, image, onClose, removeFav, addFav, myFavorites }) {

   const [ isFav, setIsFav ] = useState(false)

   const { pathname } = useLocation()

   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false)
         removeFav(id)
      }
      else {
         setIsFav(true)
         addFav({id, name, species, gender, image })
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.container}>
         {
            isFav ? (
               <button onClick={handleFavorite} className={style.btnFav}>❤️</button>
            ) 
            : 
            (
               <button onClick={handleFavorite} className={style.btnFav}>🤍</button>
            )
         }

         {
            !pathname.includes('/favorites') &&
               <button 
                  onClick={()=> {onClose(id)}} 
                  className={style.btn}>
                     X
               </button>
         }
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

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id)=> dispatch((removeFav(id)))
   }
}

const mapStateToProps = (state)=> {
   return {
      myFavorites: state.myFavorites
   }

}

export default connect(mapStateToProps, mapDispatchToProps)(Card)

