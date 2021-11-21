import React from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Hello } from './Hello.jsx';
import { Info, Task } from './Info.jsx';
import { Enregistrement } from './components/Enregistrement/Enregistrement.jsx';
import { Connexion } from './components/Connexion/Connexion.jsx'


const tasks = [
  {_id: 1, text: 'First Task'},
  {_id: 2, text: 'Second Task'},
  {_id: 3, text: 'Third Task'},
];

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <Hello />
    <nav>
      <Link to="/enregistrement">Enregistrement</Link>
      <Link to="/connexion">Connexion</Link>
      <Link to="/about">About</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/">Home</Link>
    </nav>
    <ul>
      { tasks.map(task => <Task key={ task._id } task={ task }/>) }
    </ul>
    <Routes>
      <Route path="/enregistrement" element={<Enregistrement />} />
      <Route path="/Connexion" element={<Connexion />} />
      <Route path="/about" element={<Info />} />
      <Route path="/dashboard" element={<Info />} />
      <Route path="/" components={Task} />
    </Routes>
  </div>
);
