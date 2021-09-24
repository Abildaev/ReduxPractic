import React from "react";

import Post from "./Post";
import {useDispatch, useSelector} from "react-redux";
import {fetchPost} from "../redux/action";



export default () => {

    /// 2й способ получения данных

    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.fetchedPosts);
    const loading = useSelector(state => state.app.loading);


    if (loading){
        return (
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    }

    if(!posts.length) {
        return <button className="btn btn-primary" onClick={() => dispatch(fetchPost())}>Загрузить</button>
    }
    return posts.map((post,key) => <Post post={post} key={post.id} />)
}