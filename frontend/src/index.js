import { render } from 'inferno';
import { Provider } from 'inferno-mobx';
import { observable } from 'mobx';
import './index.css';
import App from './App';
import rootStore from './stores/rootstore'
import * as serviceWorker from './serviceWorker';


render(
    <Provider rootStore={rootStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
