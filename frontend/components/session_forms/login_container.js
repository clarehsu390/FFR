import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = ({ user }) => ({
    loggedIn: Boolean(user)
});

const mapDispatchToProps = dispatch => ({
    signup: user => dispatch(signup(user)),
    login: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);