import styled from "styled-components";
import { useContextGlobal } from '../../Context';
export default function Portfolio() {
  const protofolioArray =useContextGlobal();
  const Img = styled.img`
  width: 400px;
  height: 400px;
  `
  return (
    <div>
      <h1>PORTFOLIO</h1>
   <div className="projectCard">
   {protofolioArray.map((cards) => { 
 return(
 <div className="cardP" key={cards.id}>
     <h1>{cards.name}</h1>
     <img className="imgProject" src={cards.img}></img>
     <br></br>
     <br></br>
     <a href={cards.url}> <i class="fab fa-github" style={{width:"30px",height:"30px"}}></i></a>
     <a href={cards.web}><img src="web.jpg" alt="url" style={{width:"30px",height:"30px"}}></img></a>
   </div>)
   })}
   </div>
   </div>
  ) }









