// main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import EmployeeTable from './components/EmployeeTable.jsx';
import ButtonContainer from './components/ButtonContainer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <EmployeeTable />
    <ButtonContainer></ButtonContainer>
  </React.StrictMode>
);
