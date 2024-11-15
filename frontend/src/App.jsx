import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:5000/api/contacts') // Adjust endpoint as necessary
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('There was an error!', error);
  //     });
  // }, []);
  useEffect(() => {
    fetch('http://localhost:5000/api/contacts')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error:', error));
  }, []);  
  return (
    <div className="App">
      <h1>Contact List</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
