import React from 'react';
import SignUpContainer from './session_forms/signup_container';
import LoginContainer from './session_forms/login_container';
import { Route } from 'react-router-dom';
class App extends React.Component {
    render() {
        return (
            <div>
            <Route exact path="/" component={SignUpContainer} />
            <Route path="/login" component={LoginContainer} />
            </div>
        );
    }
        
}

export default App;