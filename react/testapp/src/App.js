import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/message') // Ruta del servidor
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ejemplo de Aplicación React con Node.js</h1>
        <p>Respuesta del servidor: {message}</p>
      </header>
    </div>
  );
}

export default App;

