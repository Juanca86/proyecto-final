import { Container, Image } from "react-bootstrap";
// import backgroundImage from "../assets/images/Moteros.jpg";
import { useSelector } from "react-redux";
// import "../assets/images"
import moto from "../assets/images/1.jpg"
import moto1 from "../assets/images/2.jpg"
import moto2 from "../assets/images/3.jpg"
import moto3 from "../assets/images/4.jpg"
import moto4 from "../assets/images/5.jpg"
import moto5 from "../assets/images/6.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';
import React, { Component } from "react";

// export default function Home(){
    
    //     return(
        //         <Container>
        //             <h1>Home</h1>
        //             <Image className="container" src={backgroundImage} alt="Moto"/>
        //         </Container>
        //     )
        // }
        // {user && user.id ? (<h2> Bienvenid@ {user.username} </h2>) : ("no estas logeado")}
        
        const items = [
            {
                src: moto,
                    altText: "Slide 1",
                    caption: "Slide 1",
                },
                {
                    src: moto1,
                    altText: "Slide 2",
                    caption: "Slide 2",
                },
                {
                    src: moto2,
                    altText: "Slide 3",
                    caption: "Slide 3",
                },
                {
                    src: moto3,
                    altText: "Slide 4",
                    caption: "Slide 4",
                },
                {
                    src: moto4,
                    altText: "Slide 5",
                    caption: "Slide 5",
                },
                {
                    src: moto5,
                    altText: "Slide 6",
                    caption: "Slide 6",
    },
];

class Home extends Component {
    constructor(props) {
      super(props);
      this.state = { activeIndex: 0 };
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
      this.goToIndex = this.goToIndex.bind(this);
      this.onExiting = this.onExiting.bind(this);
      this.onExited = this.onExited.bind(this);
    }
  
    onExiting() {
      this.animating = true;
    }
  
    onExited() {
      this.animating = false;
    }
  
    next() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    previous() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    goToIndex(newIndex) {
      if (this.animating) return;
      this.setState({ activeIndex: newIndex });
    }
  
    render() {
      const { activeIndex } = this.state;
  
      const slides = items.map((item) => {
        return (
          <CarouselItem
            className="custom-tag"
            tag="div"
            key={item.src}
            onExiting={this.onExiting}
            onExited={this.onExited}
            
    >
            <div 
            className="custom-tag"
            style={{ backgroundImage: `url(${item.src})` }} >
            </div>
          
          </CarouselItem>
        );
      });
  
      return (
        <div>
          <style>
            {
              `.custom-tag {
                  max-width: 100%;
                  height: 796px;
                  background-color: black;
                  background-position: center;
                  background-size: cover;
                  
                }`
            }
          </style>
          <Carousel
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
          >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
          </Carousel>
        </div>
      );
    }
  }

export default Home;
