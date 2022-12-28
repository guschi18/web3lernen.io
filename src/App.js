import React from 'react';
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Footer from './components/Footer';



function App() {
  return (
    <div>
      {Navigation()}
      {Home()}
      {Footer()}
      </div>

  );
 };

export default App;
