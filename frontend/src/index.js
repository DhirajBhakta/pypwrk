import { render } from 'inferno';
import { BrowserRouter, Route, Link } from 'inferno-router';
import { Provider } from 'inferno-mobx';
import './index.css';
import App from './App';
import rootStore from './stores/rootstore'
import * as serviceWorker from './serviceWorker';
import Workflow from './pages/Workflow';


render(
    <Provider rootStore={rootStore}>
        <BrowserRouter>
            <Route exact path="/" component={App} />
            <Route path="/flow" component={Workflow} />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
