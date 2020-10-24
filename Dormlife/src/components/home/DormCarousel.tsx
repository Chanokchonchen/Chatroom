/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Carousel } from "react-bootstrap";
import { propsCarousel } from "./type";
function DormCarousel(props: propsCarousel) {
  const { dorms } = props;
  return (
    <Carousel style={{ padding: "1% 2%" }}>
      {dorms.map((dorm, index) => {
        return (
          <Carousel.Item key={index}>
            <a href={`/dorm/${dorm.id}`}>
              <img
                style={{ height: "500px" }}
                className="d-block w-100"
                src={dorm.src}
                alt="First slide"
              />
            </a>
          </Carousel.Item>
        );
      })}
{/* 
      <Carousel.Item>
        <a href="#">
          <img
            style={{ height: "500px" }}
            className="d-block w-100"
            src="https://udo.oop.cmu.ac.th/network%20dorm/pic_dorm/pnd.jpg"
            alt="Second slide"
          />
        </a>
      </Carousel.Item> */}
    </Carousel>
  );
}
export default DormCarousel;
