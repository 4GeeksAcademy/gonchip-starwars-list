import React from "react";

const CharacterCard = () => {
    return(
        <div className="my-card">
        <img src="..." alt="..." />
        <div className= "p-3">
            <h3>gonchip</h3>


            <p>Gender:</p>
            <p>Hair Color:</p>
            <p>Eye_Color:</p>
        </div>
        <div className="d-flex justify-content-between p-3">
            <button className="btn btn-primary"> Learn More</button>
            <button className="btn btn-warning"> Learn More</button>
        </div>		
    </div>
    )
}

export default CharacterCard