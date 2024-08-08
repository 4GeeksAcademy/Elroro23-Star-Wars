import React, { useContext, } from 'react'
import { Context } from '../store/appContext'
import "../../styles/Content.css";
import { Link } from 'react-router-dom';

const Content = () => {
    const { actions, store } = useContext(Context) //Traemos el contexto: store, actions.

    const isFavorite = (name) => { //Verificamos si el nombre del item ya está en favoritos.
        //El método .some() verifica si algún item coincide con el nombre proporcionado, si es así devuelve true.
            return store.favorites.some(item => item.name === name);
        };
    const handleToggleFavorites = (name) => { //Función para agregar y eliminar item por su NAME(con el uid hay conflictos).
        if (isFavorite(name)) { //Verificamos si ya está el item, si es true se elimina, si es false lo agregamos.
            actions.deleteFavorites(name); //función para eliminar
        } else {
            actions.addFavorites(name); //función para agregar.
        }
    };


    return (
        <>
            <div className="title">
                <h1>Characters</h1>
            </div>
            <div className="card-container">
                <div className="card-deck">
                    {store.people.map(person => { //Mapeamos nuestro array "people" para crear un card por cada elemento.
                        return (
                            <div className="card" key={person.uid}> {/*Identificador para cada elemento*/}
                                <div className="card-body">
                                    <h3>{person.name}</h3> {/*Propiedades de los elementos*/}
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div className="buttons">
                                        <Link to={`/details/people/${person.uid}`}> {/*Nos lleva a los detalles de cada item por su id y categoria: people, planets, starships*/}
                                            <i className="fa-regular fa-circle-question"></i>
                                        </Link>
                                        <i 
                                            className={`fa-regular fa-star ${isFavorite(person.name) ? "favo" : ""}`}
                                            onClick={() => handleToggleFavorites(person.name)}></i> {/*name unico de cada elemento*/}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="title">
                <h1>Planets</h1>
            </div>
            <div className="card-container">
                <div className="card-deck">
                    {store.planets.map(planet => {
                        return (
                            <div className="card" key={planet.uid}>
                                <div className="card-body">
                                    <h3>{planet.name}</h3>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div className="buttons">
                                        <Link to={`/details/planets/${planet.uid}`}>
                                            <i className="fa-regular fa-circle-question"></i>
                                        </Link>
                                        <i 
                                            className={`fa-regular fa-star ${isFavorite(planet.name) ? "favo" : ""}`}
                                            onClick={() => handleToggleFavorites(planet.name)}></i>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="title">
                <h1>Starships</h1>
            </div>
            <div className="card-container">
                <div className="card-deck">
                    {store.starships.map(starship => {
                        return (
                            <div className="card" key={starship.uid}>
                                <div className="card-body">
                                    <h3>{starship.name}</h3>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div className="buttons">
                                        <Link to={`/details/starships/${starship.uid}`}>
                                            <i className="fa-regular fa-circle-question"></i>
                                        </Link>
                                        <i 
                                            className={`fa-regular fa-star ${isFavorite(starship.name) ? "favorite" : ""}`} 
                                            onClick={() => handleToggleFavorites(starship.name)}></i>

                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div >

        </>
    )
}

export default Content
