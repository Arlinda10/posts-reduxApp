import React from 'react';
import { reduxForm } from 'redux-form';

class PostsNew extends React.Component {
    render() {
        return (
            <form>
                <h3>Create New Post</h3>
                <div className='form-group'>
                    <label>Title</label>
                    <input type='text' className='form-control' />
                </div>

                <div className='form-group'>
                    <label>Categories</label>
                    <input type='text' className='form-control' />
                </div>

                <div className='form-group'>
                    <label>Content</label>
                    <textarea className='form-control' />
                </div>
            </form>
        )
    }
} 

export default reduxForm({
    form: 'PostsNewForm',
    fields: ['title', 'categories', 'content']
}) (PostsNew);