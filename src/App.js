import './App.css';
import State from './components/Buttons';
import Planets from './components/Planets';
import Fetching from './components/Fetching';
import FetchAgain from './components/FetchAgain';

function App() {
  return (
    <div className="App">
      <h1>New Title from Branches</h1>
      <State/>
      <Planets/>
      <Fetching/>
      <FetchAgain/>
    </div>
  );
}

export default App;
