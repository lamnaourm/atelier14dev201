import React from 'react'
import { useSelector } from 'react-redux'

export default function StatsTodo() {

    const taches = useSelector(state => state.tasks)
  return (
    <div>
        Nombre de taches : {taches.length} - 
        Nombre de taches T : {taches.filter(t => t.completed).length} - 
        Nombre de taches Non T: {taches.filter(t => !t.completed).length} - 

    </div>
  )
}
