// src/components/Form1.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles1.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function Form1() {
  const navigate = useNavigate();

  const handleGetStartClick = () => {
    navigate('/doubts-form');
  };

  return (
    <div className="division">
      <div className="container">
        <h1 className="heading mt-5">Welcome to Doubt Decoder!</h1>
        <p className="para mt-5">Unlocking the Secrets to Effective Problem Solving.</p>
        <div className="btn d-flex justify-content-center m-5">
          <button id='btn' onClick={handleGetStartClick}>Get Start</button>
        </div>
      </div>
    </div>
  );
}

export default Form1;
