import React from 'react';
import './main.css';
import {useState} from 'react';
import Items from '../Items/Items';
    function Main (props){
    
        
const[coment,setComent]=useState([])

        let MyRef=React.createRef()
 
        let AddItem=()=>{
            let comentValue=MyRef.current.value;
            let comentElement={
                id:Math.random().toString(36).substr(2,9),
                value:comentValue,
                completed:false
            }
            let coments=[...coment,comentElement];  
            setComent(coments)
            MyRef.current.value=''; 
        let currentCount=props.count
        currentCount++
        props.setCount(currentCount)

        }
   
        return (
            <div className='main'>
                <input type="text" className='main__input' placeholder='Добавте задачу...' ref={MyRef}/>
                <button onClick={AddItem} className="main__add" >Add</button>
                    <Items coment={coment} setComent={setComent}  count={props.count} setCount={props.setCount}/>

            
                   
               
            </div>
        )
    }

 
    export default Main