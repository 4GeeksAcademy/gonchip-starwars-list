import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import '../../styles/Favs.css'; 

const Favs = () => {
    const { store, actions } = useContext(Context);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    return (
        <div className="favorite-container">
            <div className="button-group">
                <button
                    type="button"
                    className="btn btn-secondary dropdown-toggle"
                    onClick={toggleDropdown}
                >
                    Favorites
                    <span> {store.favorites.length}</span>
                </button>
                <ul
                    className={isDropdownOpen ? "dropdown-menu show" : "dropdown-menu"}
                >
                    {store.favorites.map((fav) => {
                        return (
                            <li key={fav.uid}>
                                <Link
                                    className="dropdown-item"
                                    to={`/${fav.nature}/${fav.uid}`}
                                >
                                    {fav?.properties?.name}
                                
                                <button
                                    className="dropdown-item delete-favorite-button"
                                    onClick={() => actions.deleteFav(fav._id)}
                                >
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Favs;
