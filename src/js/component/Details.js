import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';
import "../../styles/Details.css";

const Details = () => {
  const { actions, store } = useContext(Context); // Accedemos a nuestro contexto global
  const { uid, category } = useParams(); // Obtenemos el uid de la url y category.


  //Buscamos cada item según su id y category para saber las propiedades de cada uno.
   
  const person = store.people.find(person => person.uid === uid)
  const planet = store.planets.find(planet => planet.uid === uid)
  const starship = store.starships.find(starship => starship.uid === uid);

  const handleAddFavorite = (uid) => { //Llamamos a la función para agregar a favorites mediante su id.
    actions.addFavorites(uid);
  }
  //Llamamos a esta función para obtener los detalles de cada item y la ejecutamos solo cuando se monta useEffect(cuando hacemos clic a details).
  useEffect(() => {
    actions.getDetails(category, uid)

  }, [])

  /*const imgPeople = (`https://starwars-visualguide.com/assets/img/characters/${person.uid}`)*/
  return (
    <div className="container">

      {/*Si pertenece a la categoria "people" y "properties" existe muestra las siguientes propiedades sino no muestres nada*/}
      {category === "people" && store.details.hasOwnProperty("properties") ? (
        <>
          <div className="card bg-dark text-white">
            {/*Construimos dinámicamente la url para que muestre una imagen para cada personaje basandose en su id*/}
            <img src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
              className="card-img" alt={`${store.details.properties.name}`}
              onError={(e) => e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"} /> {/*Si la imagen no carga añadimos una por defecto*/}
            <div className="card-img-overlay">
              <h5 className="card-title">Class: {category}</h5>
              <hr />
              <p className="card-text">Name: {store.details.properties.name}</p>
              <p className="card-text">Height: {store.details.properties.height}</p>
              <p className="card-text">Mass: {store.details.properties.mass}</p>
              <p className="card-text">Hair color: {store.details.properties.hair_color}</p>
              <p className="card-text">Skin color: {store.details.properties.skin_color}</p>
              <p className="card-text">Eye color: {store.details.properties.eye_color}</p>
              <p className="card-text">Birth year: {store.details.properties.birth_year}</p>
              <p className="card-text">Gender: {store.details.properties.gender}</p>
              <p className="card-text">Homeworld: {store.details.properties.homeworld}</p>
              <div className="fav">
                <i className="fa-regular fa-star"
                  onClick={() => handleAddFavorite(person.uid)}></i>
              </div>
            </div>
          </div>
        </>
      ) : ""}
      {/*Si pertenece a la categoria "planet" y "properties" existe muestra las siguientes propiedades sino no muestres nada*/}
      {category === "planets" && store.details.hasOwnProperty("properties") ? (
        <>
          <div className="card bg-dark text-white">
            <img src={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`}
              className="card-img" alt={`${store.details.properties.name}`}
              onError={(e) => e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"} />
            <div className="card-img-overlay">
              <h5 className="card-title">Class: {category}</h5>
              <p className="card-text">Name: {store.details.properties.name}</p>
              <p className="card-text">Diameter: {store.details.properties.diameter}</p>
              <p className="card-text">Rotation period: {store.details.properties.rotation_period}</p>
              <p className="card-text">Orbital period: {store.details.properties.orbital_period}</p>
              <p className="card-text">Gravity: {store.details.properties.gravity}</p>
              <p className="card-text">Population: {store.details.properties.population}</p>
              <p className="card-text">Climate: {store.details.properties.climate}</p>
              <p className="card-text">Terrain: {store.details.properties.terrain}</p>
              <p className="card-text">Surface water: {store.details.properties.surface_water}</p>
              <div className="fav">
                <i className="fa-regular fa-star"
                  onClick={() => handleAddFavorite(person.uid)}></i>
              </div>
            </div>
          </div>
        </>
      ) : ""}
      {/*Si pertenece a la categoria "starships" y "properties" existe muestra las siguientes propiedades sino no muestres nada*/}
      {category === "starships" && store.details.hasOwnProperty("properties") ? (
        <>
          <div className="card bg-dark text-white">
            <img src={`https://starwars-visualguide.com/assets/img/starships/${uid}.jpg`}
              className="card-img" alt={`${store.details.properties.name}`}
              onError={(e) => e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"} />
            <div className="card-img-overlay">
              <h5 className="card-title">Class: {category}</h5>
              <p className="card-text">Name: {store.details.properties.name}</p>
              <p className="card-text">Model: {store.details.properties.model}</p>
              <p className="card-text">Starship class: {store.details.properties.starship_class}</p>
              <p className="card-text">Manufacturer: {store.details.properties.manufacturer}</p>
              <p className="card-text">Cost in credits: {store.details.properties.cost_in_credits}</p>
              <p className="card-text">Crew: {store.details.properties.crew}</p>
              <p className="card-text">Passengers: {store.details.properties.passengers}</p>
              <p className="card-text">Max_atmosphering_speed: {store.details.properties.max_atmosphering_speed}</p>
              <p className="card-text">Hyperdrive_rating: {store.details.properties.hyperdrive_rating}</p>
              <p className="card-text">MGLT: {store.details.properties.MGLT}</p>
              <p className="card-text">Cargo_capacity: {store.details.properties.cargo_capacity}</p>
              <p className="card-text">Consumables: {store.details.properties.consumables}</p>
              <p className="card-text">Pilots: 6</p>
              <div className="fav">
                <i className="fa-regular fa-star"
                  onClick={() => handleAddFavorite(person.uid)}></i>
              </div>
            </div>
          </div>
        </>
      ) : ""}
    </div>

  );
}

export default Details;