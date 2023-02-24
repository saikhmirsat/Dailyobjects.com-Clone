
import './App.css';

// import AllRoutes from './Router/AllRoutes';
import Navbar from './Components/Navbar'
import AllRoutes from './Router/AllRoutes';
// import Admin from './Components/Admin/Admin';




function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
