import { version, Component } from 'inferno';
import Logo from './logo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo width="80" height="80" />
          <p>{`Welcome to Inferno ${version}`}</p>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
