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
             <div className="logo d-flex justify-content-center p-4">
                <button
                    type="button"
                    className="btn btn-warning dropdown-toggle"
                    onClick={toggleDropdown}
                >
                    Favorites
                    <span> {store.favorites.length}</span>
                </button>
                <ul
                    className={isDropdownOpen ? "dropdown-menu show" : "dropdown-menu"} 
                >
                   {store.favorites.length === 0 ? (
                    <li className="dropdown-item">No hay favoritos</li>
                ) : 
                    (store.favorites.map((fav) => (
                            <li key={fav.uid} className="d-flex justify-content-between">
                                <Link
                                    className="dropdown-item"
                                    to={`/${fav.nature}/${fav.uid}`}
                                >
                                    {fav?.properties?.name}
                                 
                                </Link>

                                  <button
                                    className="dropdown-item delete-favorite-button ml-auto"
                                    onClick={() => actions.deleteFav(fav._id)}
                                >
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                               
                            </li>
                        ))
                        )}
                    </ul>
                </div>
            );
        }
export default Favs;
