import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja'

class App extends Component {
  state = {
    ninjas: [
      { name: 'Nana', age: 21, favorite: 'purple', id: 1 },
      { name: 'Natasha', age: '22?', favorite: 'Atsumu', id: 2 },
      { name: 'Atsumu', age: 'who', favorite: 'Sakusa', id: 3 }
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      // // destructive BAD PARCTICE: ninjas: this.ninjas.push(ninja) 
      ninjas: ninjas
    })
  }
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    });
    this.setState({
      ninjas: ninjas
    })
  }
  componentDidMount() {
    console.log('component mounted')
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('componentupdated');
    console.log(prevProps, prevState);
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <p>Welcome!</p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
