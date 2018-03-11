import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import Function from './routes/Functions'
import Styles from './routes/Styles'
import Components from './routes/Components'
import Arrays from './routes/Arrays'
import RenderProps from "./routes/RenderProps"


const Routing = () => (
    <Router>
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Components</Link>
                    </li>
                    <li>
                        <Link to="/styles">Styles</Link>
                    </li>
                    <li>
                        <Link to="/functions">Function Binding</Link>
                    </li>
                    <li>
                        <Link to="arrays">Arrays</Link>
                    </li>
                    <li>
                        <Link to="renderprops">Render Props</Link>
                    </li>
                </ul>
            </nav>
            <hr />
            <Route exact path="/" component={Components} />
            <Route path="/functions" component={Function} />
            <Route path="/styles" component={Styles} />
            <Route path="/arrays" component={Arrays} />
            <Route path="/renderprops" component={RenderProps} />
        </header>
    </Router>
);



ReactDOM.render(<Routing />, document.getElementById('root'));
registerServiceWorker();
