import React from 'react';
import './App.css';
import Add from './components/addNewTodo';



class App extends React.Component {

render() {
  return (
    <div className="App">
      <h1>Things That I Need to Do..</h1>
      <Add />
      
    </div>
  );
  }
}

export default App;
