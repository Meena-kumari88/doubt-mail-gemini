
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Form1 from './component/Form1';
import DoubtsForm from './component/Form';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form1 />} />
        <Route path="/doubts-form" element={<DoubtsForm />} />
      </Routes>
    </div>
  );
}

export default App;

