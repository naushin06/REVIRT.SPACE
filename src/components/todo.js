import React, { useState } from "react"
import { db } from "../firebase.mjs";

const Todo = ({text,todo,todos,setTodos})=>{

const [statos,setstat]=useState(false);

function deleteHandler(params) {
    let n=todo.key;
    db.collection("todolist").doc(todo.key).delete();
    setTodos(todos.filter(el=>el.id !== todo.id))
}
    const completeHandler=()=>{
        console.log(todo.key); 
        // db.collection("todolist").doc(todo.key).update({
        //         completed:!todo.completed
        //     })

        setTodos(todos.map((item) =>{
          let truthei=item.completed;
          console.log(todos);
console.log(item.key);
db.collection("todolist").doc(todos.key).update({
    completed:!truthei
})


let nau=todos.completed;

switch (nau){
    case true:
        db.collection("todolist").doc(todos.key).update({
            completed:!nau
        })
        break;
        case false:
        db.collection("todolist").doc(todos.key).update({
            completed:!nau
        })
      
        break;
    default:
        return 0;
        
  }



        //  if(item.id===todo.id){
            // switch (truthei){
            //     case true:
            //         db.collection("todolist").doc(item.key).update({
            //             completed:!truthei
            //         })
            //         return 0

            //         case false:
            //         db.collection("todolist").doc(item.key).update({
            //             completed:!truthei
            //         })
            //  return 0
            //     default:
            //         return 0;
                    
            //   }
        //  }




           
        if(item.completed === true)
        { 
               db.collection("todolist").doc(todo.key).update({
                completed:!item.completed
            })

        }
        else if(item.completed===false){
            db.collection("todolist").doc(todo.key).update({
                completed:!item.completed
            })
        }
        return item;
        }))




        setTodos(todos.map((item) =>{
           
            console.log(todo.completed);
        if(item.id === todo.id)
        { 
            return{
                 ...item,completed:!item.completed
            }
        }
        return item;
        }))
    }
    return(
 <div className="todo">




    
  <div className="container-fluid">
  <div className="row">
         <div className="col-12 col-lg-12 col-md-12 col-sm-12">
            
        <li className={`todo-item ${todo.completed ? "completed" :""}`}>
    {text}</li>  
         </div>
     </div>
    <div className="BTNDIV">
    <div className="row">
         <div className="col col-lg-12 col-md-12 col-sm-12">
         <button onClick={completeHandler} className="complete-btn">
         {todo.completed ?"MARK AS NOT-COMPLETED":"MARK AS COMPLETED"}
     </button>
   <button onClick={deleteHandler} className="trash-btn">
       <p className="del"> Delete</p>
     </button> 
         </div>
     </div>
    </div>
  </div> 
</div> 


    )
}
export default Todo;




