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
    }

    handleChange(field) {
        return e => this.setState({[field]: e.target.value});

    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state).then(this.setState({username: "", password: ""}));

    }

    render() {
        if (!this.props.loggedIn) {

        return (<form onSubmit={this.handleSubmit}>
            <label>Username:
                <input type="text" value={this.state.username} onChange={this.handleChange('username')}/>
                </label>
            <label>Password:
                <input type="password" value={this.state.password} onChange={this.handleChange('password')}/>
                </label>
                <input type="submit" value={this.props.formType}/>
            </form>
            );
        }
    }
}