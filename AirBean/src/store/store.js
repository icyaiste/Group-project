import { configureStore } from "@reduxjs/toolkit";
import resetCart from "../reducers/orderReducer";
import addToCart from "../reducers/orderReducer";
import removeFromCart from "../reducers/orderReducer";
import sendOrder from "../reducers/statusReducer";


const store = configureStore({
    reducer: {
        cart: resetCart,
        cart: addToCart,
        cart: removeFromCart,
        orders: sendOrder
    }
   
});

/* //function for local storage
function saveToLocalStorage(state){

    try{
      const serialState = JSON.stringify(state)
      localStorage.setItem("reduxStore",serialState)
      console.log(serialState);
    }catch(e){
      console.log(e);
    }
  }
// funtion for reading from store
  function loadFromLocalStorage(){

    try{
      const serialisedState = localStorage.getItem("reduxStore");
      if(serialisedState === null) return undefined;
      return JSON.parse(serialisedState);
    }catch(e){
      console.warn(e);
      return undefined;
    }
  }


  store.subscribe(()=>saveToLocalStorage(store.getState()));
  export  {saveToLocalStorage, loadFromLocalStorage}; */

export default store;


