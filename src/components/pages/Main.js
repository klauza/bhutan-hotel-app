import React, {Fragment} from 'react';
import MainCarrousel from './Main-children/MainCarrousel';
import MainCards from './Main-children/MainCards';
import styled from 'styled-components';
import Wrapper from '../layout/Wrapper';

const Description = styled.div`
  margin: 100px 0;
  text-align: center;
  width: 100%;
  padding: 4rem 2rem;
  background-color: #e9ecef;
  display: block;
`;
const CarDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 150px auto;
`;
const CarDesc = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const CarImage = styled.div`
  flex: 1;
  img{
    width: 100%; height: 100%; object-fit: cover;
  }
`;
const CarTopDesc = styled.h3`
  text-align: center;
`;
const CarTitle = styled.h1`
  text-align: center;
  margin-top: 20px;
  &:after{
    content:'';
    background: rgb(0, 0, 0);
    width: 50%;
    height: 3px;
    border: 0; border-radius: 35px;
    margin: 20px auto 20px;
    display: block;
  }
`;
const CarButton = styled.button`
  border: 0;
  border-radius: 4px;
  padding: 10px;
  background: green;
  color: white;
`;


const Main = () => {
  return (
    <Fragment>
      <MainCarrousel/>

      <Description>
        <div>
          <h1>By travellers for travellers</h1>
          <p>
          Once we were travellers too, just like you. Discovering new horizons, <br/>
          broadening knowledge, meeting new interesting people. <br/>
          </p>
          <p><strong>
          Now, we help you achieve even something bigger <br/>
          We help you with finding answers and provide a needed comfort. 
          </strong></p>
        </div>
      </Description>

      <Wrapper>
        <MainCards />
      
        <CarDiv>
            <CarDesc>
              <CarTopDesc>Would you like to speed up your exploration?</CarTopDesc>
              <CarTitle>Rent a car!</CarTitle>
              <CarButton>Check deals</CarButton>
            </CarDesc>

            <CarImage>
              <img className="img-fluid" src="https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
            </CarImage>
        </CarDiv>

      </Wrapper>
    </Fragment>
  )
}

export default Main
