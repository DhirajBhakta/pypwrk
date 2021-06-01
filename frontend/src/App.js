import { Component } from 'inferno';
import { inject, observer } from 'inferno-mobx'
import Logo from './logo';
import './App.css';

/** May this be your playground to test stuff */
class App extends Component {
  componentDidMount() {
    setInterval(() => this.props.rootStore.increase(), 500);
  }

  render(props) {
    return (
      <div className="App">
        <header className="App-header">
          <Logo width="80" height="80" />
          <p>{`Welcome to Pypwrk ${props.rootStore.secondsPassed}`}</p>
        </header>
      </div>
    );
  }
}

export default inject('rootStore')(observer(App));
