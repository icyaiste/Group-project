import { configureStore } from "@reduxjs/toolkit";
import resetCart  from "../reducers/orderReducer";
import saveCart  from "../reducers/orderReducer";
import readOrder  from "../reducers/orderReducer";
import addToCart from "../reducers/orderReducer";




const store = configureStore({
    reducer: {
        cart: resetCart,
        cart: addToCart,
        cart: saveCart,
        cart: readOrder
    }
   
});

//function for local storage
// function saveToLocalStorage(state){

//     try{
//       const serialState = JSON.stringify(state)
//       localStorage.setItem("reduxStore",serialState)
//       console.log(serialState);
//     }catch(e){
//       console.log(e);
//     }
//   }
// // funtion for reading from store
//   function loadFromLocalStorage(){

//     try{
//       const serialisedState = localStorage.getItem("reduxStore");
//       if(serialisedState === null) return undefined;
//       return JSON.parse(serialisedState);
//     }catch(e){
//       console.warn(e);
//       return undefined;
//     }
 // }


  //store.subscribe(()=>saveToLocalStorage(store.getState()));
  //export  {saveToLocalStorage, loadFromLocalStorage};

export default store;


