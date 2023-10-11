import React from "react";
import CharacterCard from './CharacterCard.jsx';
import PlanetCard from "./PlanetCard.jsx";
import VehiclesCard from "./VehiclesCard.jsx";
import '../../styles/Carrousel.css'; 

const Carrousel = () => {
    return (
        <div className="carrousel-container">
            <h1>Characters</h1>
            <div className="container d-flex carrousel my-4">
                <CharacterCard/>
            </div>
            <h1>Planets</h1>
            <div className="container d-flex carrousel">
                <PlanetCard/>
            </div>
            <h1>Vehicles</h1>
            <div className="container d-flex carrousel">
                <VehiclesCard/>
            </div>
        </div>
    );
}

export default Carrousel;