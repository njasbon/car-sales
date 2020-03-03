import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import CarImage from "./CarImage";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


export default function App () {

  const [carColor, setCarColor] = useState("Red");
  const [carModel, setCarModel] = useState("Subaru");

return (
    <div>
      <Card style={{ width: '18rem', margin: '20px' }}>
        <CarImage color={carColor} model={carModel}/>
          <Card.Body>
            <Card.Title>{carColor} {carModel}</Card.Title>
              <Card.Text>
              Choose your next car! Pick between a beautiful and safe Subaru or a wild and adventurous Jeep!
              </Card.Text>
                <div>
                  <Row>
                    <Col>
                    <Button variant="danger" onClick={() => setCarColor("Red")}>Red</Button>
                    </Col>
                    <Col>
                    <Button variant="primary" onClick={() => setCarColor("Blue")}>Blue </Button>
                    </Col>
                    <Col>  
                    <Button variant="warning" onClick={() => setCarColor("Yellow")}>Yellow</Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                    <Button variant="light" onClick={() => setCarModel("Subaru")}>Subaru</Button>
                    </Col>
                    <Col>
                    <Button variant="light" onClick={() => setCarModel("Jeep")}>Jeep </Button>
                    </Col>
                  </Row>
                </div>
          </Card.Body>
      </Card>
    </div>

    ) 

}
