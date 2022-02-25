import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';

export default function Posts() {
    let [posts, setPosts] = useState({ postsList: [], loading: true});

    console.log('React');
    
    useEffect(() => {

        axios.get(`https://jsonplaceholder.typicode.com/posts/`).then(res => {
            const postsList = res.data.slice(0,15);
            setPosts({ postsList, loading: false })
        })
        
    }, [])
    
    /*const getPosts = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/`).then(res => {
            const posts = res.data.slice(0,15);
            setPosts({ posts, loading: false })
        })
    } */

    //getPosts();
    
    console.log('Posts list', posts);
    const loading = posts.loading;

    return (
        <div>
            <section className="row-section">
                <div className="container">
                    <div className="row">
                        <h2 className="text-center"><span>List of posts</span>Created with <i
                            className="fa fa-heart"></i> by yemiwebby </h2>
                    </div>
                    {loading ? (
                            <div className={'row text-center'}>
                                <span className="fa fa-spin fa-spinner fa-4x"></span>
                            </div>
    
                        ) : (
                            <div className={'row'}>
                                {posts.postsList.map(post =>
                                    <div className="col-md-10 offset-md-1 row-block" key={post.id}>
                                        <ul id="sortable">
                                            <li>
                                                <div className="media">
                                                    <div className="media-body">
                                                        <h4>{post.title}</h4>
                                                        <p>{post.body}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        )}
                </div>
            </section>
        </div>
        
    )
}
