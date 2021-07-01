import styled from "styled-components";
import { useContextGlobal } from '../../Context';
import Carousel from 'react-bootstrap/Carousel'
export default function Portfolio() {
  const protofolioArray =useContextGlobal();

  const Img = styled.img`
  width: 500px;
  height: 500px;
  `
  return (
    <div>

<Carousel style={{width:"fit-content" , height:"fit-content"}}>
<Carousel.Item>
  <Img
    className="d-block w-100"
    src="movies project.jpeg"
    alt="First slide"
  />
  <Carousel.Caption>
    <h3>First slide label</h3>
    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <Img
    className="d-block w-100"
    src="news project.jpeg"
    alt="Second slide"
  />

  <Carousel.Caption>
    <h3>Second slide label</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <Img
    className="d-block w-100"
    src="cars project.jpeg"
    alt="Third slide"
  />

  <Carousel.Caption>
    <h3>Third slide label</h3>
    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
  </Carousel.Caption>
</Carousel.Item>
</Carousel> 

    </div>


  //   <div className="projectCard">
  //  {protofolioArray.map((cards) => {
  //     return(
  //     <div className="cardP" key={cards.id}>
  //       <h1>{cards.name}</h1>
  //       <img className="imgProject" src={cards.img}></img>
  //     </div>)
  //     })}
  //     </div>)
   
  )}








