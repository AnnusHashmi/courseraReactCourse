import React, { Component } from 'react';
import Menu from './Menu'
import DISHES from '../shared/menu'
import PROMOTIONS from "../shared/promotions";
import COMMENTS  from "../shared/comments";
import LEADERS  from "../shared/leader";
import Header from './header'
import Footer from './footer';
import '../App.css'
import { Switch } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter,
  withRouter
} from "react-router-dom";
import Home from './home';
import Contact from './contact';
import About from './about';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}



class Main extends Component
{
  constructor(props){
    super(props);

  }
  render(){
    const HomePage = () => {
      return(
          <Home 
              dish={this.props.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }

    return(
      <div>
    
        <Header></Header>
        <Switch>
          <Route path='/home' component={HomePage}></Route>
          <Route exact path='/menu' component={() => <Menu dishes = {this.props.dishes} />}></Route>
          <Route exact path='/aboutus' component={() => <About leaders = {this.props.leaders}></About>}></Route>
          <Route exact path='/contactus' component={Contact}></Route>
          
        </Switch>
        <Footer></Footer>
      </div>
    );
    
  }
}

export default withRouter(connect(mapStateToProps)(Main));