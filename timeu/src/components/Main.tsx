import React from "react";
import "./Main.css"
import {useState} from "react";

function Main() {
    const [widgets, setWidgets] = useState<string[]>([]);

    function handleOnDrag (e: React.DragEvent, widgetType: string) {
        e.dataTransfer.setData("widgetType", widgetType);       
    }

    function handleOnDrop(e : React.DragEvent) {
        const widgetType = e.dataTransfer.getData("widgetType") as string;
        console.log("widgetType", widgetType);
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
        <div className="App">
            <div className="ToDo"> <p>To Do:</p></div>

            <div className="widgets">
                <div
                    className="widget"
                    draggable
                    onDragStart={(e)=> handleOnDrag(e, "Physics Homework")}
                >
                    Physics Homework
                </div>
                <div
                    className="widget"
                    draggable
                    onDragStart={(e)=> handleOnDrag(e, "HackUNT Rest Session")}
                >
                    HackUNT Rest Session
                </div>
                <div
                    className="widget"
                    draggable
                    onDragStart={(e)=> handleOnDrag(e, "Holiday")}
                >
                    Holiday
                </div>
            </div>
            <div className="dropbox" onDrop={handleOnDrop} onDragOver={handleDragOver}>
                {widgets.map((widget, index) => (
                    <div className="widget" key={index}>
                        <div className="dropped-widget" draggable onDragStart={(e) => handleOnDrag(e, widget)}>{widget}</div>
                        <span className="remove-icon" onClick={() => handleRemoveWidget(index)}>&#10005;</span>
                    </div>
                ))}
            </div>
            <div>
            <button className="clearButton" onClick={handleClearWidgets}>Clear Widgets</button>
            <a href="https://www.toptal.com/project-managers/tomato-timer" target="_blank" rel="noopener noreferrer">
  <button className="pomodoro">Manage your time!</button>
</a>

            </div>
            
            <div className="calendar-table">
                
                <table>
                    <tr>
                        <th></th>
                        <th>
                            <div>12</div>
                            <div>Sun</div>
                        </th>
                        <th>
                            <div>13</div>
                            <div>Mon</div>
                        </th>
                        <th>
                            <div>14</div>
                            <div>Tue</div>
                        </th>
                        <th>
                            <div>15</div>
                            <div>Wed</div>
                        </th>
                        <th>
                            <div>16</div>
                            <div>Thur</div>
                        </th>
                        <th>
                            <div>17</div>
                            <div>Friday</div>
                        </th>
                        <th>
                            <div>18</div>
                            <div>Sat</div>
                        </th>
                    </tr>
                    <tbody>
                        <tr>
                            <td>12am</td>
                        </tr>
                        <tr>
                            <td>1am</td>
                        </tr>
                        <tr>
                            <td>2am</td>
                        </tr>
                        <tr>
                            <td>3am</td>
                        </tr>
                        <tr>
                            <td>4am</td>
                        </tr>
                        <tr>
                            <td>5am</td>
                        </tr>
                        <tr>
                            <td>6am</td>
                        </tr>
                        <tr>
                            <td>7am</td>
                        </tr>
                        <tr>
                            <td>8am</td>
                        </tr>
                        <tr>
                            <td>9am</td>
                        </tr>
                        <tr>
                            <td>10am</td>
                        </tr>
                        <tr>
                            <td>11am</td>
                        </tr>
                        <tr>
                            <td>12pm</td>
                        </tr>
                        <tr>
                            <td>1pm</td>
                        </tr>
                        <tr>
                            <td>2pm</td>
                        </tr>
                        <tr>
                            <td>3pm</td>
                        </tr>
                        <tr>
                            <td>4pm</td>
                        </tr>
                        <tr>
                            <td>5pm</td>
                        </tr>
                        <tr>
                            <td>6pm</td>
                        </tr>
                        <tr>
                            <td>7pm</td>
                        </tr>
                        <tr>
                            <td>8pm</td>
                        </tr>
                        <tr>
                            <td>9pm</td>
                        </tr>
                        <tr>
                            <td>10pm</td>
                        </tr>
                        <tr>
                            <td>11pm</td>
                        </tr>
                        <tr>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div> 
        </div>
    );

}
export default Main;