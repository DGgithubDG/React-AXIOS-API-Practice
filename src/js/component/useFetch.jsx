 import React, { useEffect, useState } from "react";
 import axios from "axios";

//  function useFetch(url) {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setLoading(true)
//     axios.get(url).then((response) =>  {
//       setData(response.data)
//   }).catch(() => {
//     setError(err)
//   }).finally(() => {
//     setLoading(false)
//   })
//  },[url]);
//  return{data, error, loading}
// }






















// getPeople: () => {
//   let url = "https://swapi.dev/api/people";
//   return fetch(url)
//   .then(response => response.json())
//   .then(data => {
//   const { results } = data;
//   return Promise.all(
//   results.map((people, index) => {
//   return fetch(people.url)
//   .then(res => res.json())
//   .then(info => {
//   data.results[index].info = info.result && info.result.properties;
//   return data;
//   });
//   })
//   );
//   })
//   .then(data => setStore({ people: data }))
//   .catch(error => console.error(error));
//   };

//   const getState = ({ getStore, getActions, setStore }) => {
//     return {
//       store: {
//         // store object values
//         // root: {},
//         favorites: [],
//         people: [],
//         films: [],
//         starships: [],
//         vehicles: [],
//         species: [],
//         planets: [],
//       }













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



//  useEffect(()=>{},[])

//  const [char, setChar] = useState([])

//  const Home = async () => {
//      fetch("https://www.swapi.dev/api/planets")
//      .then((resp)=> resp.json())
//      .then((data)=>setChar(data))
//      .catch((error)=>console.error(error))
//  }

//  const muJson = [{Name: "D"}]
//  myJson.map((el)=>{console.log()})
// const handleFav = (e) => {
//     setChar(char.push(e.target.value))
// }
// return(
//     <div>Hello</div>

//     {char.map((el, i) => key{i})}
// )

export default useFetch;