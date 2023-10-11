import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useContext } from 'react';
import { Context } from '../store/appContext';
import '../../styles/VehiclesData.css'; 

const VehiclesData = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();
    const [vehDetail, setVehDetail] = useState({});
    useEffect(() => {
        actions.getVehicle(id);
        setVehDetail(store.vehicledetail);
    }, [store.vehicledetail]);

    return (
        <>
            <div className="vehicles-container">
                <div className="card vehicles-card">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehDetail?.uid}.jpg`} className="img-fluid rounded-start vehicles-card-image" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <div className="mb-3">
                                    <h5 className="card-title vehicles-card-title">{vehDetail?.properties?.name}</h5>
                                    <p className="card-text vehicles-card-text">{vehDetail?.description}</p>
                                </div>
                                <div className="detail-divider mt-3 d-flex text-danger">
                                    <div className="row my-2 mx-2 detail-row">
                                        <p className="m-1 p-1 fw-bold detail-label">Name</p>
                                        <p className="m-1 p-1 detail-value">{vehDetail?.properties?.name}</p>
                                    </div>
                                    <div className="row my-2 mx-2 detail-row">
                                        <p className="m-1 p-1 fw-bold detail-label">Model</p>
                                        <p className="m-1 p-1 detail-value">{vehDetail?.properties?.model}</p>
                                    </div>
                                    <div className="row my-2 mx-2 detail-row">
                                        <p className="m-1 p-1 fw-bold detail-label">Vehicle Class</p>
                                        <p className="m-1 p-1 detail-value">{vehDetail?.properties?.vehicle_class}</p>
                                    </div>
                                    <div className="row my-2 mx-2 detail-row">
                                        <p className="m-1 p-1 fw-bold mx-2 detail-label">Manufacturer</p>
                                        <p className="m-1 p-1 detail-value">{vehDetail?.properties?.manufacturer}</p>
                                    </div>
                                    <div className="row my-2 mx-2 detail-row">
                                        <p className="m-1 p-1 fw-bold detail-label">Cost in Credits</p>
                                        <p className="m-1 p-1 detail-value">{vehDetail?.properties?.cost_in_credits}</p>
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

export default VehiclesData;