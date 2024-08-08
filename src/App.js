import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Parent from './components/child';
import Increament from './components/increament';
import Cincrement from './components/cincrement';

import Roshan from './recipecomponent/navbar';
function App() {
  return (
    <div className="App">
      {/* <Navbar/>
      <Sidebar/>
      <Parent/>
      <Increament name="herald" age= {12}/>
      <Cincrement  /> */}
      <Roshan/>

    
    </div>
  );
}

export default App;
