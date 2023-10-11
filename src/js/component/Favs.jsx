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
        <>
            <div className="favorite-container">
                <button className="favorite-button" onClick={toggleDropdown}>
                    Favorites
                    <span> {store.favorites.length}</span>
                </button>
                <ul className={isDropdownOpen ? "favorite-dropdown open" : "favorite-dropdown"}>
                    {store.favorites.map((fav) => {
                        return (
                            <li key={fav.uid} className="d-flex justify-content-between">
                                <Link className="dropdown-item" to={`/${fav.nature}/${fav.uid}`}>{fav?.properties?.name}</Link>
                                <button className="delete-favorite-button" onClick={() => actions.deleteFav(fav._id)}>
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default Favs;