import React from 'react';

class List extends React.Component{
  
  render() {
    return (
    <ul>
      {
        this.props.items.map((item, index) => 
          <li id="todo"  key={index}>{item}
            <button className="todo" onClick={this.props.handleDelete.bind(null, item)}>Click When Completed</button></li>)
      }
    </ul>
    )
  }};
      


export default List;