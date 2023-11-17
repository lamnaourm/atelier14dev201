import React from 'react'
import { MdDelete } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { useDispatch } from 'react-redux';
import { deletetask, modiftask } from '../redux/ActionsCreators';

export default function Task({tache}) {

  const dispatch = useDispatch()
  return (
    <div className='tache'>
        <h4 className={tache.completed ? 'barre':undefined}>{tache.task}</h4>
        <div>
            <button onClick={() => dispatch(modiftask(tache.id))}><GrUpdate /></button>
            <button onClick={() => dispatch(deletetask(tache.id))}><MdDelete /></button>
        </div>
    </div>
  )
}
