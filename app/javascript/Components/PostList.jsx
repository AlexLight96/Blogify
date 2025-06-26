import React from 'react'
import './PostList.css'

export const PostList = ({ posts }) => {
  return (
    <div className="post-list">
        <h2>Publicaciones del Blog</h2>
        {posts.length > 0 ? (
          <ul className="posts-container">
              {posts.map((post) => (
                  <li key={post.id} className="post-item">
                      <div className="post-title">{post.title}</div>
                      <div className="post-body">{post.body}</div>
                  </li>
              ))}
          </ul>
        ) : (
          <div className="no-posts">No hay posts disponibles</div>
        )}
         <button 
          className="new-post-button" 
          onClick={() => window.location.href = '/posts/new'}
        >
          Crear Nuevo Post
        </button>
    </div>
  )
}
