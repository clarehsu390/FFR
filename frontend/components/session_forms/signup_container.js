import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_actions';
import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = ({ user, errors }) => ({
    loggedIn: Boolean(user),
    formType: 'signup',
    errors
});

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors)

});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);