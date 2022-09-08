//@ts-nocheck
import React, { useEffect, useContext } from "react";
import {Carousel, Card, Col, Container, Row } from "react-bootstrap";
import AuthContext from "../context/auth/authContext";
import Title from "../components/Title";
import FeaturesCard from "../components/FeaturesCard";

const HomePage = () => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    document.title = "Home | FIELD";
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Container className="py-4 px-6">
        
        <Carousel className="shadow-lg p-3 mb-2 mt-3 bg-white">
          <Carousel.Item>
            <img
              loading="lazy"
              className="d-block w-100 rounded"
              style={{ maxHeight: "400px" }}
              src="/assets/carousel1.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              loading="lazy"
              className="d-block w-100 rounded"
              style={{ maxHeight: "400px" }}
              src="/assets/carousel2.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              loading="lazy"
              className="d-block w-100 rounded"
              style={{ maxHeight: "400px" }}
              src="/assets/carousel3.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              loading="lazy"
              className="d-block w-100 rounded"
              style={{ maxHeight: "400px" }}
              src="/assets/carousel4.jpg"
              alt="Fourth slide"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
      <Container style={{ paddingBottom: "20px" }}>
        <Row className="pt-4 pb-2">
         
          <Col md className="wrapper m-2">
            <FeaturesCard
              cardTitle="FEATURES OF TURF"
              feature1="5v5 turf"
              feature2="Cricket Pitch Available"
              feature3="Flood Lights Available"
              feature4="Changing Room and Sports Equipment Available"
            />
          </Col>
        </Row>
      </Container>
      <Title title="ABOUT FIELD" />
      <Container style={{ paddingBottom: "40px" }}>
        <Row className="pt-4 pb-2">
          <Col md className="wrapper m-2">
            <Card className="border-0 shadow-sm bg-white rounded">
              <Card.Img
                variant="top"
                alt="college"
                height="271px"
                loading="lazy"
                src="/assets/futbol.png"
              />
            </Card>
          </Col>
          <Col md className="wrapper m-2">
            <FeaturesCard
              cardTitle="SEARCH-BOOK-PLAY"
              feature1="Are you looking to play after work, organize your Sunday Five's football match? Explore the network of sports facilities"
              feature2=" Connect with the venue through the Book Now Button to make online booking"
              feature3="You’re the hero, you’ve found a slot for the turf or court, booked with ease and now its time to play. The scene is set for your epic match."
              feature4="Now no more calls for booking"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
