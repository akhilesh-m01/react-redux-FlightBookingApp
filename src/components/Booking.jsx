import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { makeBooking } from '../redux/actions';

const Booking = () => {
    const data = useSelector((state)=>state.data)
    const dispatch = useDispatch();
    const size = data.length;

    const [bookingData,setBookingData] = useState({})

    const handleChange = (e) =>{
        // console.log(e.target.value)
        const newBookingData = {...bookingData};
        newBookingData[e.target.name] = e.target.value;
        setBookingData(newBookingData);
    }
    const handleBook = (e) =>{
        e.preventDefault();
        // console.log(e.target.value)
        if(Object.keys(bookingData).length === 5){
            dispatch(makeBooking({...bookingData,id:size + 1}))
        }else{
            alert('Please select data properly')
        }
    }
    console.log(bookingData)

  return (
    <div className='md:mt-[160px] mt-[100px] mx-4 relatives'>
        <div className='bg-white rounded-md max-w-6xl w-full mx-auto'>
            <form className='flex flex-col md:flex-row'>
                <div className='py-1.5 px-2.5 flex-1 border-r-2'>
                    <p>Destination Form</p>
                    <div className='flex flex-row'>
                        <select name="from" id="from" className='outline-none p-2 w-full' required onChange={(e)=> handleChange(e)}>
                            <option value="">Please select</option>
                            <option>New York</option>
                            <option>London</option>
                            <option>Paris</option>
                            <option>Rome</option>
                        </select>
                    </div>
                </div>
                <div className='py-1.5 px-2.5 flex-1 border-r-2'>
                    <p>Destination To</p>
                    <div className='flex flex-row'>
                        <select name="to" id="to" required onChange={(e)=> handleChange(e)} className='outline-none p-2 w-full'>
                            <option value="">Please select</option>
                            <option>New York</option>
                            <option>London</option>
                            <option>Paris</option>
                            <option>Rome</option>
                        </select>
                    </div>
                </div>

                {/* date */}
                <div className='py-1.5 px-2.5 flex-1 border-r-2'>
                    <p>Journey Date</p>
                    <div className='flex flex-row'>
                        <input type="date" name='date' required onChange={(e)=> handleChange(e)} className='outline-none p-2 w-full'/>
                    </div>
                </div>

                {/* guest option */}
                <div className='py-1.5 px-2.5 flex-1 border-r-2'>
                    <p>Guest</p>
                    <div className='flex flex-row'>
                        <select name="guests" id="guests" required onChange={(e)=> handleChange(e)} className='outline-none p-2 w-full'>
                            <option value="">Please select</option>
                            <option>1 Person</option>
                            <option>2 Persons</option>
                            <option>3 Persons</option>
                            <option>4 Persons</option>
                        </select>
                    </div>
                </div>

                {/* travel class */}
                <div className='py-1.5 px-2.5 flex-1 border-r-2'>
                    <p>Travel class</p>
                    <div className='flex flex-row'>
                        <select name="ticketclassname" id="ticketclassname" required onChange={(e)=> handleChange(e)} className='outline-none p-2 w-full'>
                            <option value="">Please select</option>
                            <option>Business</option>
                            <option>Economy</option>
                        </select>
                    </div>
                </div>

                {/* submit button */}
                <button type='submit' onClick={(e) => handleBook(e)}
                className='bg-indigo-500 text-white px-8 rounded py-1 space-x-2 flex items-center justify-center'
                >
                    <FaPlus className='mr-1'/>
                    Book Now</button>

            </form>
        </div>
    </div>
  )
}

export default Booking