import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import SupportSideBar from "Components/SupportSection/SupportSideBar";
import MsgPreview from "Components/SupportSection/MsgPreview";
const Tickets = () => {
  return (
    <>
    <Row>
       <Col md={12} className='m-0 p-0'>
          <div class="support-block">
      
          <SupportSideBar/>
          <MsgPreview/>
          </div>
          </Col>
        </Row>
    </>
  );
};

export default Tickets;
