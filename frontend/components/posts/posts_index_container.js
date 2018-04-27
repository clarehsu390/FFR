import { requestAllPosts } from '../../actions/posts_actions';
import {connect} from 'react-redux';
import PostIndex from './posts_index';

const mapStateToProps = ({ posts }) => ({
    posts
});

const mapDispatchToProps = dispatch => ({
    requestAllPosts: posts => dispatch(requestAllPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);
