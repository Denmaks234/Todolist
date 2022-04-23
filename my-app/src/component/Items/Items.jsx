
import React from 'react';
import './Items.css';
import TodoItem from './Item/TodoItem';

    function Items(props){

    
        return (<div className='items'>  
            {props.coment.map((item)=><TodoItem  count={props.count} setCount={props.setCount} title={item.value} id={item.id} setComent={props.setComent}  coment={props.coment} completed={item.completed}/>)}
         </div>

        )
    }
    export default Items