import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'

import './NewPost.css';

class NewPost extends Component {

    state = {
        title: '',
        content: '',
        author: 'Clark',
        submitted: false
    }

    componentDidMount () {
        // If unauth => this.props.history.replace('/posts/')
        console.log(this.props)
    }

    postDataHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        }
        axios.post('/posts', data)
            .then(response => {
                console.log(response)
                this.props.history.push('/posts')
                // push allows you to access the previous page via back button
                // this.props.history.replace
                // ^^ this replaces the page with just like a redirect, and then it wouldn't be availble via back button
                // this.setState({submitted: true})
            })
    }

    render () {
        let redirect = null
        if (this.state.submitted) {
            redirect = <Redirect to='/posts' />
        }
        return (
            <div className="NewPost">
                {redirect}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Clark</option>
                    <option value="Manu">Sophie</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;