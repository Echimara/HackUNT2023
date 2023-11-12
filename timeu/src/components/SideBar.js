import React from "react"; // Import React, no need for useEffect in this version
import "./SideBar.css";
import { useState } from 'react';
import Popup from "./Popup"; 
// import Calendar from 'react-calendar'

function SideBar() {

    const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <>
      <div className="sbar">
        SideBar
        
        <div className="month">
          <ul>
            <li className="prev">&#10094;</li>
            <li className="next">&#10095;</li>
            <li>
              November<br></br> <div className="year">2023</div>
            </li>
          </ul>
        </div>

         <ul className="weekdays">
          <li>Mo</li>
          <li>Tu</li>
          <li>We</li>
          <li>Th</li>
          <li>Fr</li>
          <li>Sa</li>
          <li>Su</li>
        </ul>

        <ul className="days">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
          <li>
            <span className="active">11</span>
          </li>
          <li>12</li>
          <li>13</li>
          <li>14</li>
          <li>15</li>
          <li>16</li>
          <li>17</li>
          <li>18</li>
          <li>19</li>
          <li>20</li>
          <li>21</li>
          <li>22</li>
          <li>23</li>
          <li>24</li>
          <li>25</li>
          <li>26</li>
          <li>27</li>
          <li>28</li>
          <li>29</li>
          <li>30</li>
        </ul> 

       
        <div className="card">
          <div className="container">
            


          </div>
        </div>

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
