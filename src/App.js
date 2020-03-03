import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import CarImage from "./CarImage";
import Row from 'react-bootstrap/Row'


export default function App () {

  const [carColor, setCarColor] = useState("Red");


return (
    <div>
      <CarImage color={carColor}/>
      {carColor}
      <Row>
        <Button variant="danger" onClick={() => setCarColor("Red")}>Red</Button>
        <Button variant="primary" onClick={() => setCarColor("Blue")}>Blue </Button>
        <Button variant="warning" onClick={() => setCarColor("Yellow")}>Yellow</Button>
      </Row>
    </div>

    ) 
}
