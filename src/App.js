import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Parent from './components/child';
import Increament from './components/increament';
import Cincrement from './components/cincrement';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Sidebar/>
      <Parent/>
      <Increament name="herald" age= {12}/>
      <Cincrement  />

    
    </div>
  );
}

export default App;
