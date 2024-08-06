import React from "react";
import { Link } from "react-router-dom";
import FavoritesDropdown from "./FavoritesDropdown";

const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						<img style={{ height: "30px", width: "auto" }} src="https://seeklogo.com/images/S/Star_Wars-logo-97DD55947B-seeklogo.com.png" alt="Star Wars" />
					</span>
				</Link>
				<FavoritesDropdown />
			</div >

		</nav >
	);
};
export default Navbar;