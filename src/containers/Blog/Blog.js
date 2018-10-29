import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom'

// import axios from 'axios'

// import axios from '../../axios'

import Posts from '../Blog/Posts/Posts'
import NewPost from './NewPost/NewPost'
import './Blog.css';

class Blog extends Component {
    
    render () {

        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to='/'
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
                    <Route path='/' exact component={Posts} />
                    <Route path='/newpost' exact component={NewPost} />
                </Switch>
            </div>
        );
    }
}

export default Blog;