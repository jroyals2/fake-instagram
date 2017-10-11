import React, {Component} from 'react';
import styled from 'styled-components'

const Commenter = styled.div`
display: flex;
align-items: center;

img{
  width: 30px;
  height: 30px;
  border-radius: 100%;
}

`

class Comment extends Component {
  render() {
    const {comment} = this.props;
    console.log(comment);
    return (
      <Commenter>
        <img src={comment.profile_pic}/>
        <p>
          <strong>{comment.username}</strong>
          {comment.text}</p>
      </Commenter>
    );
  }
}

export default Comment;