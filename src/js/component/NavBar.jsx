import React from "react";
import { Link } from "react-router-dom";
import Favorites from "./Favs.jsx";
import '../../styles/Favs.css'; 

export const Navbar = () => {
	return (
		<>

		<div className="bg-light">
		<nav className="navbarr bg-body-tertiary container">
			<div className="container-fluid">
			<Link to="/" className="navbar-brand">
				<div className="logo">
                        <img
                            src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-6-1.png"
                             width="170" 
                             height="auto" 
							/>
						</div>	
                    </Link>
                        <Favorites />
			</div>
		</nav>
		</div>
		
		</>
	);
};

export default Navbar