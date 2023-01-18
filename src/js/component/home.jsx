import React, { useState } from "react";
import axios from "axios";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
function Home () { 
 const [joke, setJoke] = useState("");

 const GetJoke = () => {
	axios.get("https://official-joke-api.appspot.com/").then(
		(response) => {
		 console.log(response);
		setJoke(response.data.setup + "..." + response.data.punchline)
	}
	);
};
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Hello Denis!<button onClick={GetJoke}>Get joke right now!</button>
			{joke}</h1>
			
		</div>
	);
};

export default Home;
