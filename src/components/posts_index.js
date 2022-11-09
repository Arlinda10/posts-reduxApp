import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router';

class PostIndex extends React.Component {
    componentWillMount() {
        this.props.fetchPosts();
    }
    render() {
        return (
            <div className='text-xs-right'>
              <Link to='/posts/new' className='btn btn-primary'>
                Add a Post
              </Link>
            </div>
        )
    }
}

export default connect(null, { fetchPosts }) (PostIndex);