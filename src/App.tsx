import React from "react";
import "./App.css";
import Sidebar from './components/Sidebar';
import RightColumn from './components/RightColumn';
import MainContent from './components/MainContent';

function App() {
  return (
    <div>
        <div className="main-heading">
          <h1>Milhaven Guinea Pig Rescue</h1>
        </div>
        <Sidebar />
        <RightColumn />
        <MainContent />
    </div>
  );
}

export default App;
