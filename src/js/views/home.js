import React, {useContext} from "react";
import CharacterCard from "../component/CharacterCard.jsx";
import PlanetCard from "../component/PlanetCard.jsx";

import "../../styles/home.css";

export const Home = () => {
	return (
	
	
     <div className="container">
       <h1 className="text-danger"> Characters</h1>
       <div className="my-carrousel">
	     
			<CharacterCard />
			<CharacterCard />
			<CharacterCard />
			<CharacterCard />
			<CharacterCard />
			<CharacterCard />
			<CharacterCard />
			<CharacterCard />
			<CharacterCard />
			<CharacterCard />
		</div>
	


<h1 className="text-danger"> Planets</h1>
<div className="my-carrousel">
  
	 <PlanetCard />
	 <PlanetCard />
	 <PlanetCard />
	 <PlanetCard />
	 <PlanetCard />
	 <PlanetCard />
	 <PlanetCard />
	 <PlanetCard />
	 <PlanetCard />
	 <PlanetCard />
 </div>
</div>


       
   
	
)
}
