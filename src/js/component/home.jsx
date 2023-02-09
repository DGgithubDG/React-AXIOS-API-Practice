import React from 'react';
import ReactDOM from 'react-dom';
import useFetch from "./useFetch.jsx";

function loadActivity() {
      
  fetch("https://www.swapi.tech/api/planets/1")
   .then((response)=> response.json())
  .then((data) => console.log(data));

   }
const [diameter, setDiameter] = useState([]);

useEffect(() => {loadActivity()});
return <div><h1>{diameter}</h1>
<div>
</div>
</div>

export default Home;

//function Home() {
  //   const {data, loading, error} = useFetch("https://www.swapi.tech/api/planets")
  //   if (loading) return <h1>Loading...</h1>
  
  //   if(error)  console.log(error)
  //   return(
      
  //     <h1>{data?.gravity}</h1>
  //   )
  // }