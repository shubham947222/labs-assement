import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import PlantList from "./components/PlantsList";
import PlantInfo from "./components/PlantInfo";

function App() {
  return (
    // <div>
    //   <PlantList />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<PlantList />} />
          <Route path="/plant" element={<PlantInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
