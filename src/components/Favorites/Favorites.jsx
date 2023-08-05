import { connect } from "react-redux";
import Card from "../Cards/Cards";
import { filterCards, orderCards } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import style from "./Favorites.module.css";

const Favorites = ({ myFavorites }) => {
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false); // Define the local state 'aux' with initial value false

  const handleOrder = (evento) => {
    dispatch(orderCards(evento.target.value));
    setAux(!aux); // Toggle the value of 'aux' to its opposite value
  };

  const handleFilter = (evento) => {
    dispatch(filterCards(evento.target.value));
  };

  return (
    <>
      <h2>My Favorites</h2>
      <Card characters={myFavorites} />
      <select onChange={handleOrder}>
        <option value="All">All</option>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select onChange={handleFilter}>
        <option value="All">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>

    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);

