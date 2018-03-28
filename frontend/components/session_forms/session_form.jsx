import React from 'react';

export default class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }

    handleChange(field) {
        return e => this.setState({[field]: e.target.value});

    }

    handleSubmit() {

    }

    render() {
        if (!this.props.loggedIn) {

        return (<form>
            <label>Username:
                <input type="text" value={this.state.username} onChange={this.handleChange('username')}/>
                </label>
            <label>Password:
                <input type="password" value={this.state.password} onChange={this.handleChange('password')}/>
                </label>
                <input type="submit"/>
            </form>
            );
        }
    }
}