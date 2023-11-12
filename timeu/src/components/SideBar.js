import React from "react"; // Import React, no need for useEffect in this version
import "./SideBar.css";
import { useState } from 'react';
import Popup from "./Popup"; 
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./Main.tsx";


function SideBar() {

    const [buttonPopup, setButtonPopup] = useState(false);


    

  return (
    <>
      <div className="sbar">
        <Calendar className="calendar"/>

        
        <div className="card">
          <div className="container">
            <h3>
              <strong>Today </strong>11/11/2023
            </h3>
          </div>
        </div>

        <div className="card">
          <div className="container">
            <h4>Physics Homework</h4>
            <h4>HackUNT Rest Session</h4>
            <h4>Algorithms Exam</h4>
            <h4>Study Session</h4>
          </div>
        </div>

        <div className="card">
          <div className="container">
            <h3>Holidays</h3>

            
          </div>
        </div>

        <div className="card">
          <div className="container">
            <br></br>
          <button className="Pop-up" onClick={() => setButtonPopup(true)}>
            Add an event
          </button>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            {/* Popup content */}
          </Popup>            
          </div>

          
        </div>
    
      </div>    
    </>
  );
}


export default SideBar;