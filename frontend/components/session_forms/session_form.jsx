import React from 'react';

export default class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.renderHeader = this.renderHeader.bind(this);

    }

    handleChange(field) {
        return e => this.setState({[field]: e.target.value});

    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state).then(this.setState({username: "", password: ""}));

    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    renderErrors() {
        console.log(this.props.errors)
        return (
            <ul className="errors">
              {this.props.errors.map((error, i) => {
                return (
                  <li className="error" key={i}>
                    {error}
                  </li>
                );
              })
            }
            </ul>
          );
    }
    renderHeader() {
       return this.props.formType === 'login' ? 
        <h2>Login here</h2> : <h2>Sign up here</h2>
    }
    render() {
        if (!this.props.loggedIn) {

        return (
        <div className="session-container">
        <h1>Share your love for dogs</h1>
        <form className="session-form"onSubmit={this.handleSubmit}>
                {this.renderHeader()}
            <label>Username:
                <input type="text" value={this.state.username} onChange={this.handleChange('username')}/>
                </label>
            <label>Password:
                <input type="password" value={this.state.password} onChange={this.handleChange('password')}/>
                </label>
                {this.renderErrors()}
                <input class="submit-button" type="submit" value={this.props.formType}/>
                
            </form>
            </div>
            );
        }
    }
}