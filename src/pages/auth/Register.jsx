import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.css";
import Mama from "../../assets/Group 697.png";
import Background from "../../assets/76c7e3577554580136d5f65222046a21.png";

export default class Register extends Component {
    render() {
        return (
            <div className="container-fluid h-100">
            <div className="row">
              <div
                className="position-relative d-none d-md-block col-md-4 col-lg-6 p-0"
                style={{ backgroundColor: "yellow" }}
              >
                <img
                  src={Background}
                  alt="background"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  className="w-100 full"
                />
                <div className="mask h-100 w-100 d-flex justify-content-center align-items-center">
                  <img src={Mama} alt="logo" />
                </div>
              </div>
              <div className="full d-flex justify-content-center align-items-center col-12 col-md-8 col-lg-6">
                <div className="col-10 col-md-8 col-xl-6 d-flex flex-column justify-content-center align-items-center font-weight-medium">
                  <h2 className="main font-weight-bold">Lets get started !</h2>
                  <span className="log mt-4 mb-4 font-weight-normal text-center" style={{fontSize: '15px'}}>
                  Create new account to access all features
                  </span>
                  <Form className="w-100 mb-3 mt-3">
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Name"
                        className="pt-4 pb-4 pl-4 pr-0 input"
                        required
                      />
                    </Form.Group>
    
                    <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address*</Form.Label>
            <Form.Control type="email" placeholder="Enter email address" className="pt-4 pb-4 pl-4 pr-0 input" required/>
          </Form.Group>
          <Form.Group controlId="formBasicNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="number" placeholder="08xxxxxxxxxx" className="pt-4 pb-4 pl-4 pr-0 input" required/>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Create New Password</Form.Label>
            <Form.Control type="password" placeholder="Create New Password" className="pt-4 pb-4 pl-4 pr-0 input" required/>
          </Form.Group>
          <Form.Group controlId="formBasicConfirmPassword">
            <Form.Label>New Password</Form.Label>
            <Form.Control type="password" placeholder="New Password" className="pt-4 pb-4 pl-4 pr-0 input" required/>
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="I agree to terms & conditions" required/>
          </Form.Group>
          <Button variant="warning" type="submit" className="w-100 btn-main pt-2 pb-2 font-weight-medium">
            Register Account
          </Button>
                  </Form>
                  <div className="w-100 d-flex">
          <div className="w-100">
            <span className="log font-weight-normal d-flex justify-content-center">
            Already have account? <Link to="/" className="main text-decoration-none"> Log in Here </Link>
            </span>
          </div>
        </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}