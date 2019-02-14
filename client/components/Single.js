import React from 'react';
import Photo from './Photo';
import Comment from './Comment';

class Single extends React.Component{
  render(){
    // What we need in Single.js to fetch a post data.
    // index of the post
    // post
    const { postId } = this.props.params;
    const i = this.props.posts.findIndex((post) => post.code === postId );
    const post = this.props.posts[i];
    const postComments = this.props.comments[postId] || [] ;

    console.log(i);
    console.log(post);
    return(
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props}  />
        <Comment postComments={postComments} {...this.props} />
      </div>
    )
  }
}

export default Single;
