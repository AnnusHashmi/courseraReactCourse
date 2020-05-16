import React, { Component } from 'react';
import Menu from './components/Menu'
import Navigation from './components/Navbar'
import DISHES from './shared/menu'


class App extends Component
{
  constructor(props){
    super(props);

    this.state = {
      dishes : DISHES
    }
  }
  render(){
    return(
      <div>
        <Navigation></Navigation>
        <Menu dishes = {this.state.dishes}></Menu>
      </div>
    );
    
  }
}

export default App;
