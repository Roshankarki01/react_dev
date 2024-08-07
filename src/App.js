import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Parent from './components/child';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Sidebar/>
      <Parent/>

    
    </div>
  );
}

export default App;
