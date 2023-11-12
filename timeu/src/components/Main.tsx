import React from "react";
import "./Main.css";
import { useState } from "react";

function Main() {
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

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  const hoursOfDay = Array.from({ length: 6 }, (_, i) => i + 6); // Adjusted hours
  const hoursOfDay2 = Array.from({ length: 1 }, (_, i) => i + 12); // Adjusted hours
  const hoursOfDay3 = Array.from({ length: 11 }, (_, i) => i + 1); // Adjusted hours

  return (
    <div className="App">
      <div className="dropbox" onDrop={handleOnDrop} onDragOver={handleDragOver}>
        {widgets.map((widget, index) => (
          <div className="widget" key={index}>
            <div
              className="dropped-widget"
              draggable
              onDragStart={(e) => handleOnDrag(e, widget)}
            >
                <span
                className="remove-icon"
                onClick={() => handleRemoveWidget(index)}
                >
                &#10005;
                </span>
                {widget}
              
            </div>
            
          </div>
        ))}
      </div>

      <div className="calendar-table" onDrop={handleOnDrop} onDragOver={handleDragOver}>
      <table>
          <thead>
            <tr>
              <th></th>
              {daysOfWeek.map((day, index) => (
                <th key={index}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {hoursOfDay.map((hour) => (
              <tr key={hour}>
                <td>{`${hour}am`}</td>
                {daysOfWeek.map((day, index) => (
                  <td key={index}></td>
                ))}


              </tr>
            ))}
          </tbody>
          <tbody>
            {hoursOfDay2.map((hour) => (
              <tr key={hour}>
                <td>{`${hour}am`}</td>
                {daysOfWeek.map((day, index) => (
                  <td key={index}></td>
                ))}


              </tr>
            ))}
          </tbody>
          <tbody>
            {hoursOfDay3.map((hour) => (
              <tr key={hour}>
                <td>{`${hour}am`}</td>
                {daysOfWeek.map((day, index) => (
                  <td key={index}></td>
                ))}


              </tr>
            ))}
          </tbody>
        </table> 
      </div>

      <div>
        <div>
            <button className="clearButton" onClick={handleClearWidgets}>
            Clear Widgets
            </button>
        </div>
        <div>
            <a
                href="https://www.toptal.com/project-managers/tomato-timer"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="pomodoro">🍅Pomodoro Timer</button>
            </a>
        </div>
        
      </div>
    </div>
  );
}

export default Main;