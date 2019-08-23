import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

// STYLES
const Col = styled.div`
  width: 100%;
  margin-top: 75px;
  border: 0.5px solid #e6e6e6;
  opacity: 0;
  transform: translateY(150px);
`;
const Card = styled.div`
  width: 100%;
  text-align: center;
  
`;
const CardImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border: 0;
  border-radius: 50%;
  position: absolute;
  top: -50px; left: 50%; transform:translateX(-50%);
`;
const CardBody = styled.div`
  
`;
const CardTitle = styled.h4`
  margin-top: 50px;
`;
const CardText = styled.p`
  text-align: center;
  margin: 0;
 &:nth-child(2){
   margin-bottom: -10px;
 }
`;
const Button = styled.button`
  margin: 15px 0;
  background: lightblue;
  border: 1px solid black;
  border-radius: 3px;
  padding: 5px 10px;
`;
// styles-end

const GuideList = ({guide, id}) => {
  const [guideName, setGuideName] = useState(null);
  const [lackexp] = useState(5 - guide.experience);

  useEffect(() => {
    
    let person = document.querySelector('.person-'+id);
    let delay = id*65;
    person.style.transition = `all 300ms ease ${delay}ms`;
    person.style.opacity = `1`;
    person.style.transform = `translateY(0px)`;

    let name = guide.name;
    let replaced = name.replace(/\s/g, '-');
    replaced = replaced.toLowerCase();
    setGuideName(replaced);
    
  }, [id, guide.name])
  
  const experienceStars =()=> {
    let output = [];
    for(let i=0; i < guide.experience; i++){
      output.push(<i key={i} className="fa fa-star"></i>)
    }
    for(let j=0; j < lackexp; j++){
      output.push(<i key={j+112} className="fa fa-star-o"></i>)
    }
    return output
  }
  
  return (
   

    <Col className={`person-guide person-${id}`}>
        <Card>
          <CardImg src={guide.img} />
          <CardBody>
            <CardTitle>{guide.name}</CardTitle>

            <CardText>
              {experienceStars().map(star => star )}
            </CardText>
            <CardText>
              Experience
            </CardText>
            
            <Link 
            to={{
              pathname: `/guide/${guideName}`,
              state: {guide}
              }} >
              <Button>Details</Button>
            </Link>
          </CardBody>
        </Card>
      </Col>

   
  )
 
  
} 

export default GuideList
