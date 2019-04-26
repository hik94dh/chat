/* eslint-disable */
import React from 'react';
import { Route } from 'react-router-dom';
import { Auth, Home } from './pages';

// class App extends React.Component {
//     render() {
//         return (
//             <div className="wrapper">
//                <Route exact path={['/', '/login']} component={Auth} />
//             </div>
//         );
//     }
// }

const App = () => (
	<div className="wrapper">
		<Route exact path={['/', '/login', '/registration']} component={Auth} />
		<Route exact path="/im" component={Home} />
	</div>
	);

export default App;
