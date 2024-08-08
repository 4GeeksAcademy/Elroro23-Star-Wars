import React, { useContext, } from 'react'
import { Context } from "../store/appContext"
import "../../styles/FavoritesDropdown.css"

const FavoritesDropdown = () => {
    const { actions, store } = useContext(Context); //Traemos el contexto.
    const favorites = store.favorites; //Traemos el array favorites.
    const favoritesCount = favorites.length; //Obtenemos el número de elementos de favorites.
    const handleRemoveFavorite = (name) => {
        event.stopPropagation(); //Está función evita que el dropdown se cierre luego de eliminar un item.
        actions.deleteFavorites(name) //Llamamos a la función de eliminar item de favorites.
    };
    return (
        <div className="btn-group dropstart">
            <button
                className="btn btn-dark dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"><strong> Favorites</strong>
                <span className="badge bg-dark">{favoritesCount}</span> {/*Mostramos el contador*/}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {favoritesCount === 0 ? ( //Creamos un condicional para mostrar un mensaje en la lista de items si no hay y si hay mostramos los items.
                    <li className="dropdown-item">No favorites</li>
                ) : (
                    favorites.map(item => { /*Mapeamos los elementos almacenados en favorites y retornamos una lista(dropdown)*/
                        return (
                            <li className="d-flex" key={item.uid}> {/*Identificador para cada elemento*/}
                                <a className="dropdown-item"
                                    href="#">{item.name}</a>
                                <i className="fa-regular fa-square-minus" //Definimos un evento con la función de eliminar con el uid como parámetro
                                    onClick={() => handleRemoveFavorite(item.name)}
                            ></i>
                            </li>
                        )
                    })
                )
                }
            </ul>
        </div>
    )
}

export default FavoritesDropdown