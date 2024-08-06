import React, { useContext, } from 'react'
import { Context } from '../store/appContext'
import "../../styles/Content.css";
import { Link } from 'react-router-dom';

const Content = () => {
    const { actions, store } = useContext(Context) //Traemos el contexto: store, actions.

    const handleAddFavorite = (uid) => { //Función para agregar un item a favoritos por su id.
        actions.addFavorites(uid)
    }


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
                                        <i className="fa-regular fa-star"
                                            onClick={() => handleAddFavorite(person.uid)}></i> {/*id unico de cada elemento*/}
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
                                        <i className="fa-regular fa-star"
                                            onClick={() => handleAddFavorite(planet.uid)}></i>
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
                                        <i className="fa-regular fa-star"
                                            onClick={() => handleAddFavorite(starship.uid)}></i>

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
