import React from 'react'

export default function Task({tache}) {
  return (
    <div className='tache'>
        <h5>{tache.task}</h5>
        <div>
            <button>Modifier</button>
            <button>Supprimer</button>
        </div>
    </div>
  )
}
