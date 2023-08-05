import React from "react"
import style from './About.module.css'
import LOLprofile from '../../assets/LOLprofile.jpg'

const About = () => {
    return(
    <div className={style.contenedorFoto}> 
        <img src= {LOLprofile} alt="Perfil creador" className={style.barney} />
        <h2 className={style.miNombre}>Eduardo Michel</h2>
        <h2 className={style.miNombre}>México</h2>
        <h2 className={style.miNombre}>Bootcamp Henry</h2>
    </div>
    )
}

export default About