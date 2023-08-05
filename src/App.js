import './App.css'
import Cards from './components/Cards/Cards.jsx'
// import SearchBar from './components//SearchBar/SearchBar.jsx'
import Nav from './components/Nav/Nav'
import { useState } from 'react'
import axios from 'axios'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Error from './components/Error/Error'
import Form from './components/Form/Form'
import { useEffect } from 'react'
import Favorites from './components/Favorites/Favorites'



// const example = {
//   id: 1,
//   name: 'Rick Sanchez',
//   status: 'Alive',
//   species: 'Human',
//   gender: 'Male',
//   origin: {
//      name: 'Earth (C-137)',
//      url: 'https://rickandmortyapi.com/api/location/1',
//   },
//   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
// };


function App() {
  const [characters, setCharacters] = useState([])// se crea un estado para characters
//el arreglo vacio dentro de useState hace que characters inicie como un arreglo vacio
//que despues a traves de la funcion setCharacters actualizara el estado
//    const onSearch = () => {
//     setCharacters([...characters, example])//ejecutamos la funcion setCharacters y
//     //creamos una copia de characters para despues agregar el example
//   }

const location = useLocation();
const showNav = location.pathname !== '/';
function onSearch(id) {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => {
      if (data.name) {
        let idS = characters.map((character) => character.id )//arreglo que va a contener las id's actuales


            if (!idS.includes(data.id) ) { //si idS aun no tiene el id proporcionado, lo agrega
               setCharacters((caracteres) => [...caracteres, data]); //caracteres es el estadoLocal recibvido como argumento, y luego devuelve un nuevo estadoLocal mas el nuevo elemento "data"
            }

            } else {
               window.alert('');
            }
      })
      .catch((error) => {
         if (error.response && error.response.status === 404) {
            window.alert('¡No hay personajes con este ID!');
         } else {
            window.alert('Ocurrió un error en la solicitud');
         }
      });

   }
  function onClose(id) {
    setCharacters(
      characters.filter((character) => {
        return character.id !== Number(id)
      })
    )
  }
      
  //aqui se filter esta devolviendo un arreglo en el que el id proporcionado no
  //coincida con el proporcionado, es decir, elimina el id que coincide
  const navigate = useNavigate();
  const [access, setAccess] = useState(false)
  const EMAIL = 'lalomp12@hotmail.com'
  const PASSWORD = 'perro123'

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
       setAccess(true);
       navigate('/home');
    }
 }
 function handleLogout() {
  setAccess(false);
  navigate('/')
 };

 useEffect(() => {
  !access && navigate('/');
}, [access]);

  return (
    <div className='App'>
        {showNav && <Nav onSearch={onSearch} onLogout={handleLogout} />}

        <Routes>
        <Route 
          path="/" 
          element={<Form login={login} navigateToHome={() => navigate('/home')} />}
          
          />

          <Route
            path="/home"
            element={<Cards characters={characters} onClose={onClose}/>}
          
          />

          <Route 
            path= '/about'
            element={ <About/> }
          
          />

          <Route 
            path="/detail/:id"
            element={ <Detail/>}
          
          />

          <Route 
            path="*" 
            element={<Error />}
            
            />

            <Route 
            path="/favorites" 
            element={<Favorites/>}
            
            />

        </Routes>
        
        
    </div>
  )
}

//   return (
//     <div className='App'>
//         {/* <SearchBar
//           onSearch={(characterID) => window.alert(characterID)}
//         /> */}
//         <Nav onSearch= {onSearch} />
//         <Cards
//           characters={characters}
//           onClose={onClose}
//       />
//       {/* <Card
//         id={Rick.id}
//         name={Rick.name}
//         status={Rick.status}
//         species={Rick.species}
//         gender={Rick.gender}
//         origin={Rick.origin.name}
//         image={Rick.image}
//         onClose={() => alert("Emulamos que se cierra la card")}
//       /> */}
//     </div>
//   );
// }

export default App;
