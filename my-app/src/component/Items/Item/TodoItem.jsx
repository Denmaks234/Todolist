import React, {useState} from 'react';
import './TodoItem.css';
    function TodoItem (props){






        const[edit,setEdit]= useState(null)
        const[value,setValue]= useState("")
        const[style,setStyle]=useState({textDecoration:'none'})
      
        function heandler(id){
            props.coment.map((item=>{
               if(item.id==id){
                   item.completed=!item.completed
                if(item.completed==true){
                    setStyle({textDecoration:"line-through"})
                }
                else{
                    setStyle({textDecoration:"none"})
                }
               }
            })
            )
        }
        
    
        


     function Delete(id){
       let newArray=[...props.coment].filter(item=>item.id!=id)
      props.setComent(newArray)
      let currentCount=props.count
      currentCount--
      props.setCount(currentCount)
     }
     function Edit(id,title){
        setEdit(id)
        setValue(title)
     }
     function Save(id){
        let newTodoList=[...props.coment].map(item=>{
            if(item.id==id){
                item.value=value
            } 
            return item
        }
       
        )
        props.setComent(newTodoList)
        console.log(props.coment)
        setEdit(null)
     }
        return (<div className='item' key={props.id}>
            
           <input type="checkbox" defaultChecked={props.completed} onChange={()=>heandler(props.id)}/>
          {
                edit==props.id? 
                <div> 
                    <input type="text" className='rename' value={value} onChange={(e)=>setValue(e.target.value)}/>
                    <button className='save' onClick={()=>Save(props.id)}>Сохранить</button>
                </div>
                :
                <div className='item__description' style={style}>{props.title}</div>
             
               
            }
           
           <button className='item__fixed' onClick={()=>Edit(props.id, props.title)}> Виправити</button>
           <button className='item__delete' onClick={()=>Delete(props.id)}> Видалити</button>
           </div>

        )
    }
    export default TodoItem