
import './App.css';
import AllRoutes from './Router/AllRoutes';
import Navbar from './Components/Navbar';
import Admin from './Components/Admin/Admin';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Admin/>
    </div>
  );
}

export default App;
