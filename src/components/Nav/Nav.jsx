import React from "react"
import SearchBar from "../SearchBar/SearchBar"
import { Link } from "react-router-dom"
import style from './Nav.module.css'


const Nav = (props) => {
    const { onSearch, onLogout } = props
    return (
        <nav className={style.nav}>
            <div className={style.navButtons}>
                <Link to="/about" className={style.navLink}>About</Link>
                <Link to="/home" className={style.navLink}>Home</Link>
                <Link to="/favorites" className={style.navLink}>Favorites</Link>
            </div>
            <SearchBar onSearch={onSearch} />
            <button onClick={onLogout}>Log out</button>
        </nav>
    );
}

export default Nav