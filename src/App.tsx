import React,{useCallback, useReducer, useState} from 'react';
import './App.css';
import Greeting from './GreetingFunctional';
import { start } from 'repl';

const reducer = (state: any, action: any) => {
  console.log("reducer");
  switch (action.type) {
    case "enteredName":
      if(state.enteredName === action.payload){
        return state;
      }
      return {...state, enteredName: action.payload}
    case "message":
      return {...state, message: `Hello, ${action.payload}`}
    default:
      throw new Error("Niepoprawna akcja" + action.type);
    }
  }

const initialState = {
  enteredName: "",
  message: ""
};
function App() {
  const [{message, enteredName}, dispatch] = useReducer(reducer, initialState);
  const [startCount, setStartCount] = useState(0);
  const [count, setCount] = useState(0);
  const setCountCallback = useCallback(() =>{
    const inc = count + 1 > startCount ? count + 1 : Number(count + 1) + startCount;
    setCount(inc);
    // const dec = count + 1 < startCount ? count - 1 : Number(count - 1) + startCount;
    // setCount(dec);
  }, [count, startCount]);

  const onChangeStartCount =(event: React.ChangeEvent<HTMLInputElement>) => {
    setStartCount(Number(event.target.value));
  }
   

  console.log('App.render');  
  
    return (
      <div className="App">
        <header className="App-header">
          {/* <input value={enteredName} onChange={onChangeName} /> */}
          <Greeting 
          message={message}
          enteredName={enteredName}
          greetingDispatcher={dispatch} />

          <div style={{marginTop: '10px'}}>
            <label htmlFor="/">Wprowadż cyfry</label>
            <br />
            <input type="text"value={startCount} onChange={onChangeStartCount} style={{width: '.75em'}} />
            <label htmlFor="">{count}</label>
            <button onClick={setCountCallback}> + </button>
            <button onClick={setCountCallback}> - </button>
          </div>
        </header>
      </div>

    )
  }
export default App;
