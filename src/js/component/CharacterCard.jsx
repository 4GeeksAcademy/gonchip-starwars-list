import React from "react";
import { useContext } from 'react'
import { Context } from '../store/appContext'
import { Link } from 'react-router-dom'
import './CardPeople.css';

const CharacterCard = () => {
    const { store, actions } = useContext(Context)

    return (
        <div className='card-character-container'>
            {store.people.map((p) => {
                return (
                    <div key={p?.uid} className="card">
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${p?.uid}.jpg`} className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">{p?.properties?.name}</h5>
                            <div className="card-text">
                                <p>Gender: {p?.properties?.gender}</p>
                                <p>Hair Color: {p?.properties?.hair_color}</p>
                                <p>Eye-Color: {p?.properties?.eye_color}</p>
                            </div>
                            <div className='d-flex justify-content-between my-1'>
                                <Link to={`/details/${p?.uid}`} className="btn btn-primary">Learn More!</Link>
                                <button onClick={() => actions.addToFav(p)} className='btn btn-warning'><i className="fa-solid fa-star"></i></button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default CharacterCard;