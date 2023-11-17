import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { deleteAll, deleteNotermin, deletetermine } from '../redux/ActionsCreators';

export default function Operations() {

    const dispatch = useDispatch()
  return (
    <div className='operations'>
        <button onClick={() => dispatch(deleteAll())}><MdDelete /> All</button>
        <button onClick={() => dispatch(deletetermine())}><MdDelete /> Terminè</button>
        <button onClick={() => dispatch(deleteNotermin())}><MdDelete /> Non Terminè</button>
    </div>
  )
}
