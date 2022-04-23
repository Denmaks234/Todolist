import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Main from './component/main/main';
import Items from './component/Items/Items';
import {useState} from "react"
function App(props) {
  const[count,setCount]=useState(0)


  return (
    <div className="App">
      <div className='container'>
      <Header count={count}/>
      <Main count={count} setCount={setCount}/>
      </div>
    </div>
  );
}

export default App;
