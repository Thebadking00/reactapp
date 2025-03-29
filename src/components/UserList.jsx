import React, { useState, useEffect } from 'react';
import styles from './userlist.module.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  https://3.128.34.194/login
  useEffect(() => {
    fetch('https://3.128.34.194/users') // Cambia TU_API_URL por tu API de usuarios
      .then(response => response.json())
      .then(data => setUsers(data.users))
      .catch(error => console.error('Error al obtener usuarios:', error));
  }, []);
  const containerStyle = {
    width: '80%',
    margin: '20px auto',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
    overflow: 'hidden',
    textAlign: 'center',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
  };

  const headerStyle = {
    backgroundColor: '#4CAF50',
    color: '#ffffff',
    fontWeight: 'bold',
  };

  const cellStyle = {
    textAlign: 'center',
    padding: '10px 15px',
    border: '1px solid #ddd',
  };

  const rowStyle = (index) => ({
    backgroundColor: index % 2 === 0 ? '#f4f4f9' : '#e9e9ef',
  });

  const hoverRowStyle = {
    backgroundColor: '#c8e6c9',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      
      <h2>Listado de Usuarios</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Fecha de Creación</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{new Date(user.fecha_creacion).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;