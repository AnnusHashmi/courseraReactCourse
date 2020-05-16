import React from 'react'
import {CardText, Row} from 'reactstrap'
import {Card, CardImg, CardImgOverlay, CardBody, CardTitle} from 'reactstrap'

function DishChoose(props){
    
    return(
        <div>
            
            <Card>
                <CardImg top width="100%" src={props.dish.image} alt="Card image cap" />
                <CardBody>
                    <CardTitle> <h1>{props.dish.name}</h1> </CardTitle>
                    <CardText>
                        {props.dish.description}
                    </CardText> 
                </CardBody>
             </Card>   

                    
        </div>
    )
}
export default DishChoose;