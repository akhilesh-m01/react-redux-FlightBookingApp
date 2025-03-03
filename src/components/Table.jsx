import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {MdDelete} from 'react-icons/md'
import {deleteBooking} from '../redux/actions'

const Table = () => {
    const data = useSelector((state)=> state.data);
    const dispatch = useDispatch();
    const handleDelete = (e)=>{
        const id = parseInt(e.currentTarget.id)
        dispatch(deleteBooking(id));
    }

  return (
    <>
    {
        data.length && (
            <div className='max-w-6xl mx-auto mt-5 bg-white'>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                        <tr>
                            <th>Destination From</th>
                            <th>Destination To</th>
                            <th>Journey Date</th>
                            <th>Guests</th>
                            <th>Travel Class</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((data,index)=>(
                                    <tr key={index}>
                                        <th>{data.from}</th>
                                        <td>{data.to}</td>
                                        <td>{data.date}</td>
                                        <td>{data.guests}</td>
                                        <td>{data.ticketclassname}</td>
                                        <td><button id={`${data.id}`} onClick={(e)=>handleDelete(e)} className='btn-xs bg-red-500 text-white'><MdDelete/></button></td>
                                    </tr>
                                ))
                            }
                        {/* row 1 */}
                        
                        
                        </tbody>
                    </table>
                    </div>
            </div>
        )
    }
    </>
  )
}

export default Table;