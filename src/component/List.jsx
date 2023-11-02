import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToList, deleteAlist, editAitem, checkAMark } from '../redux/FormSlice';
import { Button } from 'react-bootstrap';
import { Toast, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function List() {

    const [newval, setNewval] = useState({
        id: 1, content: '', isclicked: false, isChecked: false
    })
    const dispatch = useDispatch()
    const listarray = useSelector(state => state.formReducer)
    console.log(listarray);

    const checkMarked = (item) => {
        const storcont = { ...item }
        storcont.isChecked = true
        dispatch((checkAMark(storcont)))
    }

    const EditAnTask = (prdct, index) => {

        setNewval({ ...newval, content: prdct.content })
        console.log(index);
        const storcont = { ...prdct }
        storcont.isclicked = true
        dispatch(editAitem(storcont))
    }

    const saveTask = () => {
        if (newval.content) {
            dispatch(editAitem(newval))

        } else {
            toast.warning('type data')
        }

    }
    const pickValue = (e, item) => {
        setNewval({ ...newval, content: e.target.value, id: item.id, isChecked: false, isclicked: false })
    }


    useEffect(() => {

    }, [listarray])

    return (
        <>
            <div  className='h-[350px] md:h-[350px]'>
                {
                    listarray.length > 0 ?
                        listarray.map((item, index) => (
                            <div className='bg-white h-16 w- md:w-64 md:h-14 mb-2'>
                                {
                                    item.isChecked === false ?
                                        <div>
                                            {
                                                item.isclicked === true ?
                                                    <div className='flex justify-between p-2'>
                                                        <input onChange={(e) => pickValue(e, item)} value={newval.content} className='form-control mr-2' type="text" />
                                                        <button onClick={() => saveTask()} className='btn btn-primary'>save</button>
                                                    </div>
                                                    :
                                                    <div className='flex justify-between rounded-sm p-2'>
                                                        <div className='flex'>
                                                            {/* <input onClick={() => checkMarked(item)} type="checkbox" /> */}
                                                            <div class="form-check flex">
                                                                <input onClick={() => checkMarked(item)} class="form-check-input mt-3" type="checkbox" value="" id="flexCheckDefault" />
                                                                <label class="form-check-label" for="flexCheckDefault">
                                                                    <p className='p-2'>{item.content}</p>
                                                                </label>
                                                            </div>

                                                        </div>

                                                        <div className='flex p-3'>
                                                            <button onClick={(id) => EditAnTask(item, index)}><i className="fa-solid fa-pen-to-square"></i></button>
                                                            <button onClick={(id) => dispatch(deleteAlist(item.id))}><i className="fa-solid fa-trash ml-4" style={{ color: 'red' }}></i></button>
                                                        </div>
                                                    </div>
                                            }

                                        </div> :
                                        <div className='flex justify-between rounded-sm p-1 mb-2'>
                                            <div className='flex p-1'>
                                                {/* <input type="checkbox" className='mt-2' /> */}
                                                <div class="form-check flex">
                                                    <input class="form-check-input mt-3" type="checkbox" value="" id="flexCheckChecked" checked />
                                                    <label class="form-check-label" for="flexCheckChecked">
                                                        <b><s> <p className='p-2 '>{item.content}</p></s></b>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='flex p-3'>
                                                <button onClick={(id) => dispatch(deleteAlist(item.id))}><i className="fa-solid fa-trash ml-4" style={{ color: 'red' }}></i></button>

                                            </div>
                                        </div>
                                }
                            </div>
                        ))
                        :
                        <p className='text-red-600 text-center text-3xl mt-14'>Add Today Tasks</p>
                }

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
            /></>

    )
}

export default List