import React from 'react'
import { useState } from 'react';
import { MdAdd } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { addtask } from '../redux/ActionsCreators';

export default function AddTask() {

    const [tache, setTache] = useState('')
    const dispatch = useDispatch()
  return (
    <div className='add'>
        <input type="text" name="tache" value={tache} onChange={(e) => setTache(e.target.value)} id="tache" placeholder='Saisir une description...'/>
        <button onClick={() => dispatch(addtask(tache))}><MdAdd /></button>
    </div>
  )
}
