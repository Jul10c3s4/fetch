import React from 'react';

export default function App() {

  return (
    <div className='App'>
      <h1>{counter}</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>  
        <div/>
      ))}
    </div>
  );
}

