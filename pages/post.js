import React from 'react';
import axios from 'axios';
// import { withRouter } from 'next/router';

function Post({ id, comments }) {
  return (
    <div>
      <h1>You are looking at Post #{id}</h1>
      {comments.map(comment => (
        <Comment {...comment} key={comment.id} />
      ))}
    </div>
  );
}

function Comment({ email, body }) {
  return(
    <div>
      <h5>{email}</h5>
      <p>{body}</p>
    </div>
  );
}

Post.getInitialProps = async function({ query }) {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${query.id}`);
  const { data } = res;
  return { ...query, comments: data };
}

export default Post;
// export default withRouter(post);

// Can also get the query info by using withRouter
