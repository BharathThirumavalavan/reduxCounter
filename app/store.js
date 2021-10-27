import {createSlice, configureStore} from '@reduxjs/toolkit'

const initialState = {counter:0, visible: true}

const counterReducer = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    toggle(state){
     state.visible = !state.visible
    },
    reset(state){
      state.counter=0
    }
  },
})



export const counterActions = counterReducer.actions


export const addNumberReducer=(num)=>{
  return (dispatch) => {
    console.log(num > 0)
    if(num>0){
      for(let temp=num;temp>0;temp--){
        dispatch(counterActions.increment())
      }
    }else{
       for (let temp = num; temp < 0; temp++) {
         dispatch(counterActions.decrement())
       }
    }
  }
}



const store = configureStore({
  reducer: { counter: counterReducer.reducer },
})

export default store

