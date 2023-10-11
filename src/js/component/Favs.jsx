import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import './Favs.css'; 

const Favs = () => {
    const { store, actions } = useContext(Context);

    return (
        <>
            <div className="favorite-container">
                <button className="favorite-button" onClick={toggleDropdown}>
                    Favorites
                    <span> {store.favorites.length}</span>
                </button>
                <ul className="favorite-dropdown" id="favorite-dropdown">
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