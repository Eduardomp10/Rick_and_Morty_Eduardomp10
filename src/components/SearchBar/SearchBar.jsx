import style from "./SearchBar.module.css"
import imageLogo from '../../assets/logoNav.png'
import { useState } from "react";


export default function SearchBar(props) {
   const { onSearch } = props
   const [id, setId ] = useState('')
   console.log('componente search', id);

   const handleChange = (evento) => {
      setId(evento.target.value)
   }

   const handleSearch = () => {
      onSearch(id);
    };

   const enter = (event) => {
      if(event.keyCode === 13){
        handleSearch();
      }
    }

    const handleRandom = () => {
      const random = Math.floor(Math.random() * (626 - 1) + 1);
      onSearch(random)
    }

   return (
      <div className={style.container}>
         <img 
            src={imageLogo} 
            alt="logo rick and morty" 
            className={style.logo} 
         />
         <div className={style.containerInput}>
            <input 
            type='text' 
            placeholder="Search character..." 
            className={style.input}
            onChange= {handleChange}
            onKeyDown={enter}
            // relacionamos el estado local
           
            />
            <button className={style.btn2} onClick={handleRandom}>Random character</button>
            <button onClick={()=> onSearch(id) } className={style.btn}>Add</button>
         </div>
      </div>
   );
}
