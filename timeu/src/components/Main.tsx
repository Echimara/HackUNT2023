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
                    <div
                        className="dropped-widget"
                        key={index}
                        draggable
                        onDragStart={(e) => handleOnDrag(e, widget)}
                    >
                        {widget}
                        <span
                        className="remove-icon"
                        onClick={() => handleRemoveWidget(index)}
                        >
                        &#10005;
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );

}
export default Main;