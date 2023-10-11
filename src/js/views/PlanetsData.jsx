import React, { useState, useEffect } from 'react';
import { Context } from '../store/appContext';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import '../../styles/PlanetsData.css'; 

const DataPlanet = () => {
    let { id } = useParams();
    const { store, actions } = useContext(Context);
    const [detPlanet, setDetPlanet] = useState({});
    useEffect(() => {
        actions.getPlanet(id);
        setDetPlanet(store.planetdetail);
    }, [store.planetdetail]);

    return (
        <>
            <div className="planet-container">
                <div className="card planet-card">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={`https://starwars-visualguide.com/assets/img/planets/${detPlanet?.uid}.jpg`} className="img-fluid rounded-start planet-card-image"/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <div className="mb-3">
                                    <h5 className="card-title planet-card-title">{detPlanet?.properties?.name}</h5>
                                    <p className="card-text planet-card-text">{detPlanet?.description}</p>
                                </div>
                                <div className="detail-divider mt-3 d-flex text-danger">
                                    <div className="row my-2 detail-row">
                                        <p className="m-1 p-1 fw-bold detail-label">Name</p>
                                        <p className="m-1 p-1 detail-value">{detPlanet?.properties?.name}</p>
                                    </div>
                                    <div className="row my-2 detail-row">
                                        <p className="m-1 p-1 fw-bold detail-label">Climate</p>
                                        <p className="m-1 p-1 detail-value">{detPlanet?.properties?.climate}</p>
                                    </div>
                                    <div className="row my-2 detail-row">
                                        <p className="m-1 p-1 fw-bold detail-label">Population</p>
                                        <p className="m-1 p-1 detail-value">{detPlanet?.properties?.population}</p>
                                    </div>
                                    <div className="row my-2 detail-row">
                                        <p className="m-1 p-1 fw-bold detail-label mx-2">Orbital Period</p>
                                        <p className="m-1 p-1 detail-value">{detPlanet?.properties?.orbital_period}</p>
                                    </div>
                                    <div className="row my-2 detail-row mx-2">
                                        <p className="m-1 p-1 fw-bold detail-label">Rotation Period</p>
                                        <p className="m-1 p-1 detail-value">{detPlanet?.properties?.rotation_period}</p>
                                    </div>
                                    <div className="row my-2 detail-row">
                                        <p className="m-1 p-1 fw-bold detail-label">Diameter</p>
                                        <p className="m-1 p-1 detail-value">{detPlanet?.properties?.diameter}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DataPlanet;