import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function loadNotes() {
      try {
        const response = await fetch("/api/notes", {method: "GET"});
        const notes = await response.json();
        setNotes(notes);
      } catch (error) {
        console.error(error)
        alert(error);
      }
    }
    loadNotes();
  }, [])

  return (
    <div className="App">
      {JSON.stringify(notes)}
    </div>
  );
}

export default App;
