import { createSlice } from "@reduxjs/toolkit";


const FormSLice = createSlice({
    name: 'form',
    initialState: [],
    reducers: {
        addToList: (state, action) => {
            console.log(action.payload);
            state.push(action.payload)
        },
        deleteAlist: (state, action) => {
            console.log(state[0]);
            return state.filter(item => item.id != action.payload)
        },
        editAitem: (state, action) => {
            console.log(action.payload);
            state.map((item, index) => {
                
                console.log(item.id);
                if(item.id===action.payload.id){
                    state[index]=action.payload
                }
                    console.log(state);
                return state
            })

        },

        checkAMark:(state,action)=>{
            state.map((item, index) => {
                
                console.log(item.id);
                if(item.id===action.payload.id){
                    state[index]=action.payload
                }
                    console.log(state);
                return state
            })
        }

    }

})
export const { addToList, deleteAlist, editAitem,checkAMark } = FormSLice.actions
export default FormSLice.reducer