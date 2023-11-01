import React, { useState } from 'react'
import List from './List'
import { useDispatch } from 'react-redux'
import { addToList, editAitem } from '../redux/FormSlice';
import { Toast, toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Form() {
    let id1 = Math.floor(Math.random() * 1000)
    const [value, setvalue] = useState({
        id: 1, content: '', isclicked: false, isChecked: false
    })
    console.log(value);
    const dispatch = useDispatch()

    const storeValue = () => {

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
                <div className=' md:w-1/3 bg-gray-700 md:p-6 p-4 justify-items-center'>
                    <h1 className='text-center mb-16' style={{ fontSize: '40px', color: 'white' }}>TO DO APP</h1>

                    <div className='ml-16'>
                        <label htmlFor="">
                            <input id='form' onChange={(e) => setvalue({ ...value, content: e.target.value, id: id1, isChecked: false, isclicked: false })} value={value.content} type="text" className='md:w-90 h-8 rounded-xl p-3 outline-none' placeholder='Enter the task' />
                            <button name='form' onClick={() => storeValue()} className='ml-1 p-1 bg-slate-400 rounded-full'><i className="fa-solid fa-plus "></i></button><br /></label>

                    </div>
                    <div className='ml-12 w-3/4 mt-16 '>
                        <List />
                    </div>
                </div>
                <ToastContainer
                    position="top-center"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                {/* Same as */}
                <ToastContainer />

            </div>
        </div>
    )
}

export default Form