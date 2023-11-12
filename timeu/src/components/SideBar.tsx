import React from "react"; // Import React, no need for useEffect in this version
import "./SideBar.css";
import { useState } from 'react';
import Popup from "./Popup.js"; 
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./Main.tsx";


function SideBar() {

    const [buttonPopup, setButtonPopup] = useState(false);


    const [widgets, setWidgets] = useState<string[]>([]);

    function handleOnDrag(e: React.DragEvent, widgetType: string) {
      e.dataTransfer.setData("widgetType", widgetType);
    }

    function handleOnDrop(e: React.DragEvent) {
      e.preventDefault();
      const widgetType = e.dataTransfer.getData("widgetType") as string;
      setWidgets([...widgets, widgetType]);
    }

    function handleDragOver(e: React.DragEvent) {
      e.preventDefault();
    }

    function handleClearWidgets() {
      setWidgets([]);
    }

    function handleRemoveWidget(index: number) {
      const updatedWidgets = [...widgets];
      updatedWidgets.splice(index, 1);
      setWidgets(updatedWidgets);
    }

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
            <div
            className="widget"
            draggable
            onDragStart={(e) => handleOnDrag(e, "Physics Homework")}
            >
              <h4>Physics Homework</h4>
            </div>
            <div
            className="widget"
            draggable
            onDragStart={(e) => handleOnDrag(e, "HackUNT Rest Session")}
            >
              <h4>HackUNT Rest Session</h4>
            </div>
            <div
            className="widget"
            draggable
            onDragStart={(e) => handleOnDrag(e, "Algorithms Exam")}
            >
              <h4>Algorithms Exam</h4>
            </div>
            <div
            className="widget"
            draggable
            onDragStart={(e) => handleOnDrag(e, "Study Session")}
            >
              <h4>Study Session</h4>
            </div>
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