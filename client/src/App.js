import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import Navbar from './components/Navbar';
import InputForm from './components/InputForm';
import CardCreator from './components/CardCreator';
class App extends Component{
  constructor(){
    super();
    this.state = {
      player: [],
      playerText: ''
    }
  }

  componentDidMount(){
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => 
        {
          this.setState({
            player: res.data
          })
          console.log(res)
        })
      .catch(err => {
        console.log("There was an error", err)
      })
  }

  // componentDidUpdate(prevProps, prevState){
  //   if(this.state.player === prevState.player){
  //     alert("Not a valid name")
  //   }
  // }

  handleChanges = e => {
    this.setState({
      playerText: e.target.value
    })
  }

  fetchPlayer = e => {
    e.preventDefault()
    axios
      .get(`http://localhost:5000/api/${this.state.playerText}`)
      .then(res => {
        this.setState({
          player: res.data
        })
      })
      .catch(err => console.log("There was an error", err))
  }

  render(){
    return(
      <div className="App">
        <Navbar />
        <InputForm
          updateText={this.state.playerText}
          changeHandler={this.handleChanges}
          fetch={this.fetchPlayer}
        />
        <CardCreator
          player={this.state.player}
        />
      </div>
    )
  }
}

export default App;