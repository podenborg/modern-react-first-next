import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import Navbar from '../components/Navbar';

function index({ posts }) {
  return (
    <div>
      <h1>Our Index Page!!</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/p/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

index.getInitialProps = async function() {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const { data } = res;
  return { posts: data };
}

export default index;
