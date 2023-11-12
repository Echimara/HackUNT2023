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
  const hoursOfDay = Array.from({ length: 24 }, (_, i) => i);

  return (
    <div className="App">
      <div className="ToDo">
        <p>To Do:</p>
      </div>

      <div className="widgets">
        <div
          className="widget"
          draggable
          onDragStart={(e) => handleOnDrag(e, "Physics Homework")}
        >
          Physics Homework
        </div>
        <div
          className="widget"
          draggable
          onDragStart={(e) => handleOnDrag(e, "HackUNT Rest Session")}
        >
          HackUNT Rest Session
        </div>
        <div
          className="widget"
          draggable
          onDragStart={(e) => handleOnDrag(e, "Holiday")}
        >
          Holiday
        </div>
      </div>

      <div className="dropbox" onDrop={handleOnDrop} onDragOver={handleDragOver}>
        {widgets.map((widget, index) => (
          <div className="widget" key={index}>
            <div
              className="dropped-widget"
              draggable
              onDragStart={(e) => handleOnDrag(e, widget)}
            >
              {widget}
            </div>
            <span
              className="remove-icon"
              onClick={() => handleRemoveWidget(index)}
            >
              &#10005;
            </span>
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
        </table>
      </div>

      <div>
        <button className="clearButton" onClick={handleClearWidgets}>
          Clear Widgets
        </button>
        <a
          href="https://www.toptal.com/project-managers/tomato-timer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="pomodoro">🍅Pomodoro Timer</button>
        </a>
      </div>
    </div>
  );
}

export default Main;