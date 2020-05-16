import React, { Component } from 'react'
import {CardText} from 'reactstrap'
import {Card, CardImg, CardImgOverlay, CardBody, CardTitle} from 'reactstrap'
import DishChoose from '../components/dishchoose';
import RenderComments from '../components/renderComments'


class Menu extends Component{
    constructor(props){
        super(props);

        this.state = {
           selectedDishes : null
        }
    }

    handleClick(dish){
        this.setState({selectedDishes : dish}); 

    };

    renderDish(dish){
        if(dish != null){
            console.log(dish);
            
            return(
                <div>
                    <DishChoose dish = {dish}></DishChoose>
                    <RenderComments dish = {this.state.selectedDishes}></RenderComments>
                </div>
            );
        }

        else{
            return(
                <div><h1></h1></div>
            )
        }
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return(
                <div className = 'col-12 col-md-5 m-1'>
                    <Card id={dish.id} onClick={() => this.handleClick(dish)}>
                        <CardImg top width="100%" src={dish.image} alt="Card image cap" />

                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>

                        <CardBody>

                        </CardBody>
                    </Card>
                </div>
            )
        })
        return(
            <div className='container'>
                <div className='row'>
                        {menu};
                </div>

                <div className="row">
                  <div className = 'col-12 col-md-5 m-1'>
                    {this.renderDish(this.state.selectedDishes)}
                  </div>
                </div>
                
            </div>
        )
    }
}

export default Menu;
