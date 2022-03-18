import React from "react";
import "./App.module.css";
import Navbar from "./components/navbar/Navbar";
import BasicInfo from "./components/BasicInfo/BasicInfo";
import SensorReadings from "./components/SensorReadings/SensorReadings";
const App = () => {
  return (
    <div className="wrap">
      <div className="App">
        <Navbar />
        <BasicInfo />
        <SensorReadings />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
