import './App.css';
import Main from "./components/Main.tsx";
import SideBar from './components/SideBar'; 


function App() {
  return (
    <div className='page'>
      <SideBar/>
      <Main/>
    </div>
  );
}

export default App;
