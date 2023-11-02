import React, { useState } from 'react'
import List from './List'
import { useDispatch } from 'react-redux'
import { addToList, editAitem } from '../redux/FormSlice';
import { Toast, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TextField } from '@mui/material';


function Form() {
    let id1 = Math.floor(Math.random() * 1000)
    const [value, setvalue] = useState({
        id: 1, content: '', isclicked: false, isChecked: false
    })
    console.log(value);
    const dispatch = useDispatch()

    const storeValue = (e) => {
        e.preventDefault()
        // console.log(index);
        if (value.content) {
            dispatch(addToList(value))
            setvalue({ content: "" })
        }
        else {
            toast.warning('type data')
        }
    }

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='w-[100%] flex justify-center items-center'>
                <div className='w-96 md:w-1/3 bg-gray-700 md:p-6 p-4 justify-items-center'>
                    <h1 className='text-center mb-16' style={{ fontSize: '40px', color: 'white' }}>TO DO LIST</h1>

                    <div className='flex justify-center'>
                        <form >
                            <input onChange={(e) => setvalue({ ...value, content: e.target.value, id: id1, isChecked: false, isclicked: false })} value={value.content} type="text" className='md:w-60 w-72 h-10 rounded-xl p-3 outline-none' placeholder='Enter the task' />
                            <button type='submit' name='form' onClick={(e) => storeValue(e)} className='ml-1 p-1 bg-slate-400 rounded-full'><i className="fa-solid fa-plus w-9 h-7 p-1 text-xl"></i></button><br />
                        </form>

                    </div>
                    <div className='md:ml-12 md:w-3/4  mt-16 '>
                        <List />
                    </div>
                </div>
                <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />

            </div>
        </div>
    )
}

export default Form