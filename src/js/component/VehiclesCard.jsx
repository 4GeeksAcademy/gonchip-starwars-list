import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';
import '../../styles/Vehicles.css'; 

const VehiclesCard = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className='vehicles-card-container'>
            {store.vehicles.map((ve) => {
                return (
                    <div key={ve.uid} className="vehicle-card">
                        <img src={`https://starwars-visualguide.com/assets/img/vehicles/${ve.uid}.jpg`} className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">{ve.properties.name}</h5>
                            <div className="card-text">
                                <p>Model: {ve.properties.model}</p>
                                <p>Vehicle Class: {ve.properties.vehicle_class}</p>
                            </div>
                            <div className='d-flex justify-content-between my-1'>
                                <Link to={`/vehicles/${ve.uid}`} className="btn btn-primary">Learn More</Link>
                                <button onClick={() => actions.addToFav(ve)} className='btn btn-warning'><i className="fa-solid fa-star"></i></button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default VehiclesCard;