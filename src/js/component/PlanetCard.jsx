import React from "react";
import { useContext } from 'react'
import { Context } from '../store/appContext'
import { Link } from 'react-router-dom'
import '../../styles/PlanetsCard.css';

const PlanetCard = () => {
    const {store, actions} = useContext(Context)
    return (
        <div>
            <div className='planet-card-container'>
                {store.planets.map((p) => {
                    return (
                        <div key={p.uid} className="planet-card">
                            <img src={`https://starwars-visualguide.com/assets/img/planets/${p.uid}.jpg`} className="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title">{p.properties.name}</h5>
                                <div className="card-text">
                                    <p>Population: {p.properties.population}</p>
                                    <p>Terrain: {p.properties.terrain}</p>
                                </div>
                                <div className='d-flex justify-content-between my-1'>
                                    <Link to={`/planets/${p.uid}`} className="btn btn-primary">Learn More</Link>
                                    <button onClick={() => actions.addToFav(p)} className='btn btn-warning'><i className="fa-solid fa-star"></i></button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default PlanetCard