import React from "react";
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import style from './Detail.module.css'

const Detail = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

     const handleClick =()=> {
        navigate('/home')
      }

      return (
        <div className={style.infoTarjeta}>
            {/* <button onClick={handleClick}>Home</button> */}
            <img className={style.imagenPersonaje} src={character.image} alt={character.name} />
            {
                character ? (
                    <div className={style.textoTarjeta}>
                        <h2>Detail</h2>
                        <h2>Name: {character.name}</h2>
                        <h2>Status: {character.status}</h2>
                        <h2>Specie: {character.species}</h2>
                        <h2>Gender: {character.gender}</h2>
                        <h2>Origin: {character.origin?.name}</h2>
                        
                    </div>
                ) : (
                    ''
                )
            }
        </div>
    )
}

export default Detail