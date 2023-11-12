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
            <div className="widgets">
                <div
                    className="widget"
                    draggable
                    onDragStart={(e)=> handleOnDrag(e, "Widget A")}
                >
                    Widget A
                </div>
                <div
                    className="widget"
                    draggable
                    onDragStart={(e)=> handleOnDrag(e, "Widget B")}
                >
                    Widget B
                </div>
                <div
                    className="widget"
                    draggable
                    onDragStart={(e)=> handleOnDrag(e, "Widget C")}
                >
                    Widget C
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
            <button onClick={handleClearWidgets}>Clear Widgets</button>
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
                    <div className="tbody">
                        <tbody>
                            <tr>
                                <td>12am</td>
                            </tr>
                            <tr className="tbgap">
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>1am</td>
                            </tr>
                            <tr></tr>
                            <tr>
                                <td>2am</td>
                            </tr>
                            <tr></tr>
                            <tr>
                                <td>3am</td>
                            </tr>
                            <tr></tr>
                            <tr>
                                <td>4am</td>
                            </tr>
                            <tr></tr>
                            <tr>
                                <td>5am</td>
                            </tr>
                            <tr></tr>
                            <tr>
                                <td>6am</td>
                            </tr>
                            <tr></tr>
                            <tr>
                                <td>7am</td>
                            </tr>
                            <tr></tr>
                            <tr>
                                <td>8am</td>
                            </tr>
                            <tr></tr>
                            <tr>
                                <td>9am</td>
                            </tr>
                            <tr></tr>
                            <tr>
                                <td>10am</td>
                            </tr>
                            <tr></tr>
                            <tr>
                                <td>11am</td>
                            </tr>
                            <tr></tr>
                            <tr>
                                <td>12pm</td>
                            </tr>
                            <tr></tr>
                            <tr>
                                <td>1pm</td>
                            </tr>
                            <tr></tr>
                            <tr>
                                <td>2pm</td>
                            </tr>
                            <tr></tr>
                            <tr>
                                <td>3pm</td>
                            </tr>
                            <tr></tr>
                            <tr>
                                <td>4pm</td>
                            </tr>
                            <tr></tr>
                            <tr>
                                <td>5pm</td>
                            </tr>
                            <tr></tr>
                            <tr>
                                <td>6pm</td>
                            </tr>
                            <tr></tr>
                            <tr>
                                <td>7pm</td>
                            </tr>
                            <tr></tr>
                            <tr>
                                <td>8pm</td>
                            </tr>
                            <tr></tr>
                            <tr>
                                <td>9pm</td>
                            </tr>
                            <tr></tr>
                            <tr>
                                <td>10pm</td>
                            </tr>
                            <tr></tr>
                            <tr>
                                <td>11pm</td>
                            </tr>
                            <tr></tr>
                            <tr>
                                <td></td>
                            </tr>
                            <tr></tr>
                        </tbody>
                    </div>
                    
                </table>
            </div> 
        </div>
    );

}
export default Main;