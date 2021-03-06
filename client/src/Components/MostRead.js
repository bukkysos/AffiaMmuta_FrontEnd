import React, { Component } from 'react';
import { Col, Row, Image, Grid, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import cart from './Assets/CustomCart.png';


export default class MostRead extends Component {
    constructor(){
        super();
        this.state = {
        mostRead: []
        }
    }
    componentDidMount(){
        axios.get("https://affiammuta.herokuapp.com/books/latest")
    .then(res=>{
       this.setState({mostRead: res.data});
       
    })
    }
    render() {
        const mostRead = this.state.mostRead.map(item=>
        <Link to={{
            pathname:`/book/${item._id}`,
            state: {mostRead: item._id}
            }}>
            <Col xs={12} sm={4} className= "wrapper">
            <Row className="books-top" >
                <Col className="image-container" >
                <Image src={item.bookImage} alt='Logo' className="books-jpg" />
                </Col>
            </Row>
            <Row className="books-bottom" >
                <Col className="book-title" >
                <span className= "title">{item.title}</span>
                <span className="author" >{item.author}</span>
                <span className="price" >&#8358;{item.price}</span>
                </Col>
                <Col className="book-price" >
                <Button className="book-buttons" type="submit">
                    <Image src={cart} alt='cart' className="cart-books" />
                </Button>
                </Col>
            </Row>
            </Col>
        </Link>
        )
    return (
        <div>
            <Grid className= "grid">
                <Row className= "show-grid text-center">
                {mostRead}          
                </Row>
            </Grid>
        </div>
    );
  }
}