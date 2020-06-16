import React from "react";
import CarouselSlider from "react-carousel-slider";
import { Link } from "react-router-dom";

let data = [
  {
    des: "Name",
    imgSrc: "https://i.imgur.com/d5aiXJP.jpg"
  },
  {
    des: "Name 2",
    imgSrc: "https://i.imgur.com/pgCzueK.jpg"
  },
  {
    des: "Name 3",
    imgSrc: "https://i.imgur.com/7nbAJ0C.jpg"
  },
  {
    des: "Name 4",
    imgSrc: "https://i.imgur.com/L75otV6.jpg"
  },
  {
    des: "Name 5",
    imgSrc: "https://i.imgur.com/qkPMr9D.jpg"
  }
];

let sliderBoxStyle = {
  height: "250px"
  //, width: "200px"
  // , background: "tranparent"
};

let itemsStyle = {
  width:'70%'
};

let textBoxStyle = {
  // textAlign: "left"
  // ,width:"50%"
  // , background: "transparent"
  // , fontSize: "36px"
  // , fontWeight: 300
};

let buttonSetting = {
  // placeOn: "middle-inside"
  // ,hoverEvent: true,
  // , style: {
  //   left: {
  //     margin: "0px 0px 0px 10px"
  //   },
  //   right: {
  //     margin: "0px 10px 0px 0px"
  //   }
  // }
};

let manner = {
   autoSliding: {interval: "2s"},
   duration: "0.3s"
};

let options = {
  button:false
}

export const Carousel = () => (
  <div>
    <CarouselSlider
    slideItems={data}
    manner={manner}
    buttonSetting={buttonSetting}
    sliderBoxStyle={sliderBoxStyle}
    itemsStyle={itemsStyle}
    textBoxStyle={textBoxStyle}
    accEle={options}
  />
  <div style={{marginLeft:'20px',padding:'20px 0px'}} >
    <Link className='Link' to='/coding_testimonials' >See All</Link>
  </div>
  </div>
);