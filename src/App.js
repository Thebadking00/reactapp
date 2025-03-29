import React, { useState } from 'react';
import Login from './components/login';
import Register from './components/Register';
import UserList from './components/UserList';
import './App.css'; // Asegúrate de usar la ruta relativa correcta


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [showAuthOptions, setShowAuthOptions] = useState(true);
  const [showRegister, setShowRegister] = useState(false);

  const handleLoginSuccess = (user) => {
    setIsLoggedIn(true);
    setUserData(user);
  };

  return (
    <div>
      <h1>Mi Aplicación React</h1>
      {isLoggedIn ? (
        <div>
          <h2>Bienvenido, {userData?.name}</h2>
          <UserList />
        </div>
      ) : showAuthOptions ? (
        <div>
          <h2>Bienvenido</h2>
          <p>Selecciona una opción:</p>
          <button onClick={() => { setShowAuthOptions(false); setShowRegister(false); }}>Iniciar Sesión</button>
          <button onClick={() => { setShowAuthOptions(false); setShowRegister(true); }}>Registrarse</button>
        </div>
      ) : showRegister ? (
        <Register onRegisterSuccess={handleLoginSuccess} onToggle={() => setShowAuthOptions(true)} />
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} onToggle={() => setShowAuthOptions(true)} />
      )}
    </div>
  );
};

export default App;