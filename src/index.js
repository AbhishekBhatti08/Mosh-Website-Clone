import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './Reducer.js';

const store = createStore(reducer);


ReactDOM.render(
  <React.StrictMode>

    {/* doubt in below line */}
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// const initialState = {
//     age:20
// };
// // const reducer = (state=initialState, action) => {
// //     const newState = {...state};
// //     switch(action.type){
// //         case 'AGE_UP': 
// //             newState.age += action.value;
// //             break;
// //     return newState;
// // };
// const reducer = (state=initialState, action) => {
//     const newState = {...state};
//     switch(action.type){
//         case 'AGE_UP': 
//           return {
//               ...state,
//               age : state.age + action.value
//           }

//         case 'AGE_DOWN': 
//         return {
//             ...state,
//             age : state.age - action.value
//           }          
//      }
//      return state;
// };
// const store = createStore(reducer);
// ReactDOM.render(
//


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
