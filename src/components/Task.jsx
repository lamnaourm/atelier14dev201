import React from 'react'
import { MdDelete } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";

export default function Task({tache}) {
  return (
    <div className='tache'>
        <h4 className={tache.completed ? 'barre':undefined}>{tache.task}</h4>
        <div>
            <button><GrUpdate /></button>
            <button><MdDelete /></button>
        </div>
    </div>
  )
}
