import React from "react";
import {connect} from "react-redux";
import Post from "./Post";



const Posts =  ({syncPost}) => {
    if(!syncPost.length) {
        return <p className="text-center">Постов нет</p>
    }
    return syncPost.map((post,key) => <Post post={post} id={post} key={key}/>)
}
const mapStateToProps = state => {
    return {
        syncPost: state.posts.posts
    }
}

export default connect(mapStateToProps, null) (Posts);