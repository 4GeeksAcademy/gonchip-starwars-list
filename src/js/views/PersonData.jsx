import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import '../../styles/Data.css';

const DataPerson = () => {
    const { id } = useParams()
    const { store, actions } = useContext(Context)
    const [detPerson, setDetPerson] = useState({})
    useEffect(() => {
        actions.getPerson(id)
        setDetPerson(store.persondetail)
    }, [store.persondetail])

    return (
        <>
            <div className="details-container">
                <div className="card details-card">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="img-fluid rounded-start details-card-image" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <div className="mb-3">
                                    <h5 className="card-title details-card-title">{id.properties?.name}</h5>
                                    <p className="card-text details-card-text">{id?.description}</p>
                                </div>
                                <div className="detail-divider mt-3 d-flex text-danger">
                                    <div className="row my-2 detail-row">
                                        <p className="m-1 p-1 fw-bold detail-label">Name</p>
                                        <p className="m-1 p-1 detail-value">{id.properties?.name}</p>
                                    </div>
                                    <div className="row my-2 detail-row">
                                        <p className="m-1 p-1 fw-bold detail-label">Birth Year</p>
                                        <p className="m-1 p-1 detail-value">{id.properties?.birth_year}</p>
                                    </div>
                                    <div className="row my-2 detail-row">
                                        <p className="m-1 p-1 fw-bold detail-label">Gender</p>
                                        <p className="m-1 p-1 detail-value">{id.properties?.gender}</p>
                                    </div>
                                    <div className="row my-2 detail-row">
                                        <p className="m-1 p-1 fw-bold detail-label">Height</p>
                                        <p className="m-1 p-1 detail-value">{id.properties?.height}</p>
                                    </div>
                                    <div className="row my-2 detail-row">
                                        <p className="m-1 p-1 fw-bold detail-label">Skin Color</p>
                                        <p className="m-1 p-1 detail-value">{id.properties?.skin_color}</p>
                                    </div>
                                    <div className="row my-2 detail-row">
                                        <p className="m-1 p-1 fw-bold detail-label">Eye Color</p>
                                        <p className="m-1 p-1 detail-value">{id.properties?.eye_color}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DataPerson;