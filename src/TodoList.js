import React from "react";
import './TodoList.css';
class TodoList extends React.Component{
    constructor(props){
        super(props)
            this.state={
                input:'',
                text:[]
        }
    }
onChange(event){
    this.setState({
        input:event.target.value
    })
}
addTodo(event){
    event.preventDefault();
    this.setState({
        input:'',
        text:[...this.state.text , this.state.input]
    })
}
editTodo(event){
    event.preventDefault();
    this.setState({
        
    })
}
modifyTodo(event){
    event.preventDefault();
    this.setState({

    })

}
deleteTodo(event){
    event.preventDefault();
    const array= this.state.text
    const items = array.indexOf(event.target.value)
    array.splice(items,1)
    this.setState({
        item:array
    })
}
renderTodos(){
    return this.state.text.map((item, index) => (
        <div key={index}>
            <ul className="list-group d-flex justify-content-center align-items-center">
             <li className="list-group-item mt-3   d-flex justify-content-between  w-75">
                {item}
                <i onClick={this.editTodo.bind(this)} className="fa-solid fa-check check fs-5 "></i>
                <i onClick={this.modifyTodo.bind(this)} className="fa-solid fa-pen-to-square fs-5"></i>
                     <i  onClick={this.deleteTodo.bind(this)} className="fa-solid fa-trash fs-5 "></i>
  </li>
  </ul>
        </div>

    ));
}
    render(){
    return(
        <div className="mt-4 p-3 "> 
          <div className="d-flex justify-content-center align-items-center">
            <form className="bg-dark text-center w-75">
              <label className="form-label text-white fs-1 text-center">TodoList </label>
                <div className="d-flex justify-content-center align-items-center">
                    <input 
                        value={this.state.input}
                        type="text" 
                        className="form-control w-75 mx-3"  
                        onChange={this.onChange.bind(this)}/>
                         <i onClick={this.addTodo.bind(this)}  className="fa-solid fa-plus text-white fs-3"></i>
    </div>
    <div>{this.renderTodos()}</div>
    </form>
</div>
</div>

    )
}
}
export default TodoList