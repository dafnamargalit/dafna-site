import './App.css';
import Home from './home/Home';
import StarrySky from './starrySky/StarrySky';

function App() {
  return (
    <div className="App">
      <StarrySky />
      <div className="content">
      <Home className="letters"/>
      </div>
    </div>
  );
}

export default App;
