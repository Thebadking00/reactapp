// Register Component
import React, { useState } from 'react';

const Register = ({ onRegisterSuccess, onToggle }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Para controlar el estado de carga

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage('');
    setIsLoading(true); // Activar estado de carga

    try {
      const response = await fetch('https://3.128.34.194/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      // Verifica si el servidor responde con un JSON válido
      const data = await response.json();

      if (response.ok) {
        setMessage('Usuario registrado exitosamente');
        onRegisterSuccess(data.user); // Notifica el éxito al padre
      } else {
        setMessage(data.message || 'Error en el registro. Por favor revisa tus datos');
      }
    } catch (error) {
      setMessage('Hubo un error al conectar con el servidor. Intenta nuevamente.');
      console.error('Error al registrar:', error);
    } finally {
      setIsLoading(false); // Desactivar estado de carga
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            disabled={isLoading}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={isLoading}
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Registrando...' : 'Registrarse'}
        </button>
      </form>
      {message && <p>{message}</p>}
      <button onClick={onToggle} disabled={isLoading}>
        ¿Ya tienes cuenta? Inicia sesión
      </button>
    </div>
  );
};

export default Register;