import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./actions-types";

const initialState = {
 myFavorites: [],
 allCharacters: [],
 filterGender: null

}



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            const copyCharacters = [...state.myFavorites, action.payload];

            return {
                ...state,
                myFavorites: copyCharacters,
                allCharacters: copyCharacters,
            }
        
            case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter((character)=>
                character.id !== action.payload)
            }

            case FILTER:
            const filterCharacter = action.payload === "All" ? 
                state.allCharacters : 
                state.allCharacters.filter((character) => character.gender === action.payload)

            return {
              ...state,
              myFavorites: filterCharacter,
              filterGender: action.payload // género filtrado en el estado
            };
                        
            case ORDER:
                const allCharactersCopy = [...state.allCharacters]
                return{
                    ...state,
                    myFavorites:
                        action.payload === "A"
                        ? allCharactersCopy.sort((a, b) => a.id - b.id)
                        : allCharactersCopy.sort((a, b) => b.id - a.id)
                }


            default:
                return {
                    ...state
                }
    }
}



export default reducer