// import React, { useEffect, useState } from 'react';
// import Cards from './Cards';

// const Home = () => {
// //   const [inputvalue, setInputValue] = useState(''); // Initialize as an empty string
// //   const [search, setSearch] = useState(''); // Initialize as an empty string
// //   const [data, setData] = useState([]);
// //   const [loading,setloading] = useState(true);

// //   const handleSearch = () => {
// //     setSearch(inputvalue);
// //   };

// //   useEffect(() => {
// //     fetch('https://catfact.ninja/facts')
// //       .then((response) => {
// //         if (!response.ok) {
// //           throw new Error('Network response was not ok');
// //         }
// //         return response.json(); // Assuming you want to parse the response as JSON
// //       })
// //       .then((data) => {
// //         console.log(data.articles); // Handle the data from the response
// //         setData(data.articles);
// //       })
// //       .catch((error) => {
// //         console.error('There was a problem with the fetch operation:', error);
// //       });
// //   }, [search]); // Use 'search' as the dependency

// //   useEffect(()=>{
// //     Axio.get(`https://catfact.ninja/facts`)
// //     console.log(response.data.articles)
// //     setData(response.data.articles)
// //     setloading(false);
// //   }).catch((error) =>{
// //     console.log(error)
// //     setloading(false);
// //   })
// // },[searchTerm]

// // if(loading){
// //   return <h1>Loading....</h1>
// // }

//   return (
//     <div>
//       <h1>this is roshan</h1>
//       {/* <input type='text' value={inputvalue} onChange={(e) => setInputValue(e.target.value)} />
//       <button onClick={handleSearch}>Search</button>
//       {data && <Cards datas={data} />} */}
//     </div>
//   );
// };

// export default Home;

import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is a simple home page component.</p>
    </div>
  );
};

export default Home;
