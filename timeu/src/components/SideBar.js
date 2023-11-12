import React from "react"; // Import React, no need for useEffect in this version
import "./SideBar.css";
import { useState } from 'react';
import Popup from "./Popup"; 
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

// import Calendar from 'react-calendar'

function SideBar() {

    const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <>
      <div className="sbar">
        <Calendar/>

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