// import React from 'react';

// class App extends React.Component{
//   constructor(){
//     super()
//     this.state={title:"Coucou les Amis"}
//   }
//   render(){
//     return <h1>{this.state.title}</h1>
//   }
// }
// export default  App;

// import React, { Component } from 'react';
// import React from 'react';

// class App extends  React.Component{
//   constructor(props){
//     super(props)
//     this.state={
//           count:0
//     }
//   }
//   incrementCount(){
//     this.setState({count : this.state.count +1})
//   }
//   render(){
//     return(
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={() =>this.incrementCount()}>Incrémenter</button>
//       </div>
//     )
//   }
// }
// export default App;




// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// class TodoList extends React.Component{
//   constructor(props){
//     super(props)
//     this.state={
//       UserInput:'',
//       text:[]
//     }
//   }
//   onChange(event){
//     this.setState({
//       UserInput:event.target.value
//     });
//   }
//   addtask(event){
//     event.preventDefault()
//     this.setState({
//         UserInput:'',
//         text:[...this.state.text, this.state.UserInput]   
//     })
//   }
//   deleteTodo(event){
//     event.preventDefault();
//     const array=this.state.text;
//     const item = array.indexOf(event.target.value)
//     array.splice(item,1);
//     this.setState({
//       index:array
//     })

//   }
//   renderTodos(){
//     return this.state.text.map((index) =>{
//       return <div key={index} className='mt-3'>
//                 <ul className="list-group">
//                   <li className="list-group-item  d-flex justify-content-between  bg-danger">       
//                      {index} <button onClick={this.deleteTodo.bind(this)} className='btn btn-warning'>Supprimer</button> 
//             </li>
//             </ul>
//       </div>
//     })
//   }
//   render(){
//     return(
//       <div className="mt-5 p-3">
//   <label  className="form-label">TodoList</label>
//   <div className='d-flex'>
//   <input value={this.state.UserInput}
//       type="text" 
//       className="form-control w-75 "
//       onChange={this.onChange.bind(this)} />
//   <button onClick={this.addtask.bind(this)} className='btn btn-primary '>Ajouter</button>
//   </div>
//   <div>
//     {this.renderTodos()}
//   </div>
// </div>
//     )
//   }

// }
// export default TodoList


import React from "react";
import TodoList from "./TodoList";
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component{
  render(){
    return(
      <div>
      <TodoList/>
      </div>
    )
  
  }
}
export default App