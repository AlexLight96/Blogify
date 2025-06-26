import React from 'react'
import axios from '../config/axios'
import './PostList.css'

export const PostList = ({ posts }) => {
  const handleDelete = async (id) => {
    if (confirm('¿Estás seguro de que quieres eliminar este post?')) {
      try {
        await axios.delete(`/posts/${id}`)
        alert('Post eliminado exitosamente')
        window.location.reload()
      } catch (error) {
        alert('Error al eliminar el post')
        console.error(error)
      }
    }
  }
  return (
    <div className="post-list">
        <h2>Publicaciones del Blog</h2>
        {posts.length > 0 ? (
          <ul className="posts-container">
              {posts.map((post) => (
                  <li key={post.id} className="post-item">
                      <div className="post-title">{post.title}</div>
                      <div className="post-body">{post.body}</div>
                      <button 
                        className="delete-button"
                        onClick={() => handleDelete(post.id)}
                      >
                        Eliminar
                      </button>
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
