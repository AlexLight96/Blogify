import React, { useState } from 'react'
import axios from '../config/axios'
import './PostForm.css'

export const PostForm = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      await axios.post('/posts', {
        post: { title, body }
      })
      
      setTitle('')
      setBody('')
      alert('¡Post creado exitosamente!')
      window.location.href = '/posts'
      
    } catch (error) {
      alert('Error al crear el post')
      console.error(error)
    }
  }
  
  return (
    <div className="post-form">
      <h2>Crear Nuevo Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Título:</label>
          <input 
            type="text" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            minLength={3}
          />
        </div>
        <div className="form-group">
          <label>Contenido:</label>
          <textarea 
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
            minLength={10}
          />
        </div>
        <button type="submit" className="submit-button">Crear Post</button>
        <button 
          type="button" 
          className="back-button"
          onClick={() => window.location.href = '/posts'}
        >
          Volver a Posts
        </button>
      </form>
    </div>
  )
} 