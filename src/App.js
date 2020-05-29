import React from 'react';
import logo from './logo.svg';
import './App.css';


// function App(){
//   return (
//     <div className="App">
//       <h1 className="App-header">
//       <img src={logo} className="App-logo" />
//       </h1>
//     </div>
//   );
// }

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      newItem: "",
      list: []
    };
  }

  addItem(todoValue){
    if(todoValue!=""){
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false
      };
      const list = [...this.state.list];
      list.push(newItem)

      this.setState({
        list, 
        newItem: ""
      });
    }
  }

  deleteItem(id){
    const list = [...this.state.list];
    const updatedlist = list.filter(item => item.id != id);
    this.setState({list: updatedlist})
  }

  updateInput(input){
    this.setState({newItem:input});
  }

  render(){
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" width="100" height="100" />
        <h1>LCO ToDo App</h1>
        <div className="container">
          Add an Item...
          <br/>
          <input
           type="text" 
           className="input-text" 
           placeholder="Write a ToDo" 
           required 
           value={this.state.newItem}
           onChange={e => this.updateInput(e.target.value)}
          />
          <button
           className="btn add-btn"
           onClick={() => this.addItem(this.state.newItem)}
           disabled={!this.state.newItem.length}
          >Add ToDo</button>
          <div className="list">
            <ul>
              {this.state.list.map(item => {
                return(
                  <li key={item.id}>
                    <input
                     type="checkbox" 
                     name="idDone" 
                     checked={item.isDone}
                     onChange={() => {}}
                    />
                    {item.value}
                    <button
                     className="btn delete-btn float-right"
                     onClick={() => this.deleteItem(item.id)}
                    >Delete</button>
                  </li>
                );
              })}
              <li>
                <input type="checkbox" name="" id=""/>
                Record Youtube video
                <button className="btn delete-btn float-right">Delete</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App;

