import Counter from 'Components/Counter';
import HeaderTop from 'Components/Header'
import LevelOneComponent from 'Components/LevelOneComponent';
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const LevelOne = () => {
   
  return (
    <>
          <HeaderTop />
          <Row className='m-3'>
            <Col md={8}>
                <h2>Level One Challenges</h2>
            </Col>
            <Col md={4}>
            <Card >
                        <Card.Body>
                            <Row  className='inner_styling'>
                                <Col md={6} className='d-flex'>
                                    <i class="fas fa-pennant"></i>
                                    <p><strong>Challenge Points</strong></p>
                                </Col>
                                <Col md={6} className='d-flex justify-content-end'>
                                    <h3>20</h3>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
            </Col>
           
            <LevelOneComponent />
          </Row>
    </>
  )
}

export default LevelOne