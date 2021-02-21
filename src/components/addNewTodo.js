import React from 'react';
import List from './list';


class Add extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            term: "",  // the initial state of the todo list
            items: []  // set as an empty array
        }
    }

    handleChange = (e) => {
        this.setState({term: e.target.value}) // function to handle the change of the input (grasping the input value)
    }
    
    handleAdd = (e) => {
        e.preventDefault();     //preventing a page refresh on submit
        this.setState({
            term: "", 
            items: [...this.state.items, this.state.term] // adding new items to the array [...] - a spread notation 
        })
    }

    handleDelete = (item) => {
        console.log(item);
        let newList = this.state.items.filter((_item) => { // using javascript filter method to remove requested item and return new array
            return _item !== item;
        })
        this.setState({items: newList}) // set the state to the new array 
    }
       
 render(){
        return (
            <div>
                <form onSubmit={this.handleAdd}> {/* form element fires the handleAdd function to add todo */}
                    <label>Add Your To Do Here : </label>
                    <input className="add" value={this.state.term} onChange={this.handleChange}></input>
                    </form>
                <List items={this.state.items} handleDelete={this.handleDelete.bind(this)}/> 
                
            </div>
            
        )
    }
};

export default Add;