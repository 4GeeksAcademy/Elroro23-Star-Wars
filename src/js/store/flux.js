const getState = ({ getStore, getActions, setStore }) => {
	const base = "https://www.swapi.tech/api/"; //Añadimos la url a la constante para trabajar como facilidad.


	return {
		store: { //Creamos nuestros objetos para definir el estado actual.
			people: [],
			planets: [],
			starships: [],
			favorites: [],
			details: {}
		}, 
		//Funciones
		actions: {
			//Función para añadir un elemento por su id a nuestro dropdown.
			addFavorites: (uid) => { //uid es el id que nos da la api.
				const store = getStore() //Obtenemos el estado actual de store(nuestros objetos).
				if (!store.favorites.some(item => item.uid === uid)) { //Verificamos si el uid ya está en favoritos.

					const itemAdd = store.people.find(person => person.uid === uid) || //Buscamos el objeto correspondiente al uid en las categorías.
						store.planets.find(planet => planet.uid === uid) ||
						store.starships.find(starship => starship.uid === uid);
					if (itemAdd) { // Verificamos si se encontró el objeto a añadir.
						setStore({ favorites: [...store.favorites, itemAdd] }) //Si está lo agregamos al array FAVORITES.
					}
				}

			},
			//Función para eliminar un elemento por su id de nuestro dropdown.
			deleteFavorites: (uid) => {
				const store = getStore()
				//Filtramos todos los elementos que no coincidan con el id seleccionado(item a eliminar).
				const favoritedeleted = store.favorites.filter(item => item.uid !== uid);
				setStore({ favorites: favoritedeleted }) //Devolvemos el nuevo array sin el item seleccionado.
			},
			//Funciones para obtener la información.
			getPeople: () => {
				fetch(`${base}people`)
					.then((response) => {
						if (!response.ok) {
							throw new Error("Datos de PEOPLE NO obtenidos")
						}
						return response.json();
					})
					.then(data => {
						setStore({ people: data.results })
					})


					.catch(error => console.error("Error GET PEOPLE" + error))

			},
			getPlanets: () => {
				fetch(`${base}planets`)
					.then((response) => {
						if (!response.ok) {
							throw new Error("Datos de PLANETS NO obtenidos")
						}
						return response.json();
					})
					.then(data => {
						setStore({ planets: data.results })
					})
					.catch(error => console.error("Error GET PLANETS" + error))
			},
			getStarships: () => {
				fetch(`${base}starships`)
					.then((response) => {
						if (!response.ok) {
							throw new Error("Datos de STARSHIPS NO obtenidos")
						}
						return response.json();
					})
					.then(data => {


						setStore({ starships: data.results })
					})
					.catch(error => console.error("Error GET STARSHIPS" + error))
			},
			getDetails: (category, uid) => {
				fetch(`${base}${category}/${uid}`)
					.then((response) => {
						if (!response.ok) {
							throw new Error("Datos del ELEMENTO NO obtenidos")
						}
						return response.json();
					})
					.then(data => {

						
						setStore({ details: data.result })

					})
					.catch(error => console.error("Error GET propiedades del ELEMENTO" + error))
			}
		}
	};
}

export default getState;
