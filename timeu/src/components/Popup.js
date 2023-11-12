
function Popup(props) {

    return (props.trigger) ? ( 
      <div className="popup">
          <div className="popup-inner">
            { props.children }
            <br></br>
            <div className="event-type">
          <label htmlFor="event-type">Enter the event type:</label>
          <select id="event-type" name="event-type" required>
            <option value="school">School</option>
            <option value="work">Work</option>
            <option value="leisure">Leisure</option>
            <option value="miscellaneous">Miscellaneous</option>
          </select>
        </div> 
            <input type="text" placeholder="What is the event's name?" name="name" required/>
            <center><button className="popup-create">Create</button></center>
            <button className="close-btn" onClick={() => props.setTrigger(false)}>Close</button>

          </div>
      </div>
    ) : "";
}


export default Popup;