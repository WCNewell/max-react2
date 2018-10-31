import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'

// import axios from 'axios'

// import axios from '../../axios'

import Posts from '../Blog/Posts/Posts'
import asyncComponent from '../../hoc/asyncComponent'
// import NewPost from './NewPost/NewPost'
import './Blog.css'

const AsyncNewPost = asyncComponent (() => {
    return import('./NewPost/NewPost')
})

class Blog extends Component {

    state = {
        auth: true
    }
    
    render () {

        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to='/posts'
                                exact
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/newpost',
                                // ^^ this always generates an absolute path
                                // pathname: this.props.match.url + '/newpost'
                                // ^^ example of how to build a dynamic relative path
                                // hash: '#submit',
                                // ^^ example of syntax used when appending a jump-to "fragment" to a URL...
                                // search: '?quick-submit-true'
                                // ^^ example of query param
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} /> */}
                {/* <Route path='/' exact component={Posts} /> */}
                {/* // ^^ Route can live outside switch, basically you can mix and match these to create what you want/need */}
                <Switch>
                    {this.state.auth ? <Route path='/newpost' exact component={AsyncNewPost} /> : null }
                    <Route path='/posts' component={Posts} />
                    {/* <Route render={()=> <h1>Not found</h1>} /> */}
                    {/* ^^Example of what to display when the page does not load or user is unauthorized, etc. */}
                    {/* <Route path='/' component={Posts} /> */}
                    <Redirect from='/' to='/posts' />
                    {/* Here the switch statement is not necessary but left for reference purposes */}
                    {/* Also in Redirect above, the from statement only works here because it is wrapped in the Switch element */}
                </Switch>
            </div>
        );
    }
}

export default Blog;