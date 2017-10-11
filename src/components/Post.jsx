import React, { Component } from 'react';
import Comment from './Comment';
import { FaHeartO, FaCommentO } from 'react-icons/lib/fa'
import styled from 'styled-components'

const PostContainer = styled.div`
background: rgb(249, 249, 249);
border-radius: 8px;
max-width: 600px;
margin: 25px auto;
border: 1px solid black;
`

const PostUser = styled.div`
display: flex;
padding: 10px;

img{  
  border-radius: 100%;
  height: 50px;
}
`
const PostImage = styled.div`

p{
  font-size: 20px;
}
img{
  max-width: 600px;
}
`
const CommentSection = styled.div`

`

class Post extends Component{

  render(){
    const { post } = this.props;
    return(
      <PostContainer>
        <PostUser>
          <img src={post.user.profile_pic} alt={post.user.username} />
          <p>{post.user.username}</p>
        </PostUser>
        <PostImage>
          <img src={post.image.url} />
          <p>{post.caption}</p>
        </PostImage>
        <CommentSection>
          <FaHeartO size={35} />
          <FaCommentO size={35} />
        <p>{post.likes.length} likes</p>
        {post.comments.map((comment,i) => <Comment key={i} comment={comment}/>)}
        </CommentSection>
      </PostContainer>
    )
  }
}

export default Post;