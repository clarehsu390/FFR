import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = ({ user }) => ({
    loggedIn: Boolean(user),
    formType: 'signup'
});

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);