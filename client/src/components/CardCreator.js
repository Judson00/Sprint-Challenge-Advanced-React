import React from 'react';

import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Card, CardText, CardBody,
  CardTitle
} from 'reactstrap';


const CardCreator = props => {
  return (
    <div>
      <Card style={{backgroundColor: '#478af5'}}>
        {props.player.map(item => {
          return (
            <CardBody>
              <CardTitle>Name: {item.name}</CardTitle>
              <CardText>Country: {item.country}</CardText>
              <CardText>Searches: {item.searches}</CardText>
            </CardBody>
          );
        })}
      </Card>
    </div>
  )
}

export default CardCreator;