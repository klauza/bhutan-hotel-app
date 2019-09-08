import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import { Wrapper } from '../layout/Elements';
import styled from 'styled-components';
import { reservationCalendar, carImg } from '../../media/index';
import { Link } from 'react-router-dom';

// STYLES
const Outline = styled.div`
  width: 80%;
  max-width: 900px;
  height: 200px;
  margin: 50px auto;
  border: 1px solid lightgrey; border-radius: 3px;
  display: grid;
  align-items: center; justify-items: center;
`;
const OutlineContent = styled.div`
  height: 60%; width: 80%;
  background: lightcoral;
  text-align: center;
  padding: 30px;
  color: white;
  font-size: 1.5rem;
  font-weight: 500;
  border: 0; border-radius: 3px;
`;
// ---------------- //
const ApartmentContainer = styled.div`
  display: flex; flex-direction: column;
`;
const AccountTitle = styled.h2`
  color: white;
  text-align: center;
  margin: 100px 0 50px;
  line-height: 40px;
  background: linear-gradient(to right,
    rgba(255,255,255, 0) 0%,
    rgba(0,128,0, 1) 35%,
    rgba(0,128,0, 1) 65%,
    rgba(255,255,255, 0) 100%
  );
  @media(max-width: 768px){ background: rgba(0,128,0, 1); }
`;
const Flex = styled.div`
  display: flex; flex-direction: row; flex-wrap: wrap;
  justify-content: center;
`;
const Card = styled.div`
  display: flex; flex-direction: column;
  margin: 20px;
  p{
    background: orange;
    text-align: center;
  }

`;
const CardCalendar = styled.div`
display: grid; grid-template-columns: 2fr 5fr;
background: black;
width: 200px;
height: 100px;
color: white;
justify-items: center;
align-items: center;
  div{
    width: 50px; height: 50px;
    img{
      width: 100%; height: 100%; object-fit: cover;
    }
  }
`;
// ----------------------- //
const ApartmentCard = styled.div`
  display: grid; 
  /* grid-template-rows: 1fr 100px; */
  border: 1px solid black;
  width: auto;
  max-width: 400px;
  max-height: 300px;
  margin: 0 auto;
  box-shadow: 0px 2px 3px 1px rgba(0,0,0,0.45); transition: all 250ms ease;
  &:hover{ box-shadow: 0px 2px 3px 3px rgba(0,0,0,0.45); transition: all 250ms ease; filter: brightness(0.9); }
  a{
    text-decoration: none; color: black;
  }
`;
const ApartmentImg = styled.div`
  width: 100%; height: 100%;
  img{ width: 50%; height: 100%; object-fit: cover; }
  display: flex; flex-direction: row;
  div{ 
    width: 50%;
    display: flex; flex-direction: column;
    font-size: 2rem;
    padding-left: 15px;
    span{
      width: 100%; height: 100%; 
      display: flex;
      align-items: center;
    }
  }
`;
const ApartmentName = styled.div`
  background: green;
  color: white; font-weight: 700;
  text-align: center;
  line-height: 100px;
`;
// ----------------------- //
const Key = styled.div`
  width: 80%; height: auto;
  max-width: 900px; 
  margin: 50px auto;
  text-align: center;
  p > span {
    color: red;
  }
`;
// ---------------------- //
const TripsContainer = styled.div`
  border: 2px solid black; border-radius: 3px;
  width: auto; max-width: 900px; margin: 20px auto;
  min-height: 50px;
  line-height: 50px;
  background: lightgrey;
  text-align: center;
`;
const TripsTitle = styled.h2`
  background: linear-gradient(to right,
    rgba(255,255,255, 0) 0%,
    rgba(0,128,0, 1) 35%,
    rgba(0,128,0, 1) 65%,
    rgba(255,255,255, 0) 100%
  );
  @media(max-width: 768px){ background: rgba(0,128,0, 1); }
  line-height: 40px;
  color: white;
  text-align: center;
  margin: 100px 0 50px;
`;
const TripsPopulated = styled.div`
  width: auto; max-width: 900px; margin: 20px auto;
`;
const TripsText = styled.div`
  line-height: 55px;
  display: inline-block;
  img{
    width: 50px; height: 50px; object-fit: cover; margin: 0 10px;
  }
`;
// ---------------------- //
const CarContainer = styled.div`
  border: 2px solid black; border-radius: 3px;
  width: auto; max-width: 900px; margin: 20px auto;
  min-height: 50px;
  line-height: 50px;
  background: lightgrey;
  text-align: center;
`;
const CarTitle = styled.h2`
  background: linear-gradient(to right,
    rgba(255,255,255, 0) 0%,
    rgba(0,128,0, 1) 35%,
    rgba(0,128,0, 1) 65%,
    rgba(255,255,255, 0) 100%
  );
  text-align: center;
  line-height: 40px;
  color: white;
  margin: 100px 0 50px;
  @media(max-width: 768px){ background: rgba(0,128,0, 1); }
`;
const CarWrapper = styled.div`
  width: auto; max-width: 900px; margin: 20px auto;
  background: lightgrey;
  text-align: center;
  border: 2px solid black; border-radius: 3px;
  display: flex;
  flex-direction: column;
  div{
    min-height: 75px;
    font-size: 1.6em;
    padding: 10px;
  }
`;
const CarImage = styled.img`
  width: 100%; height: 100%; object-fit: cover;
`;
// end-styles

const Account = ({ reservation: {dates, apartment, trips, car} }) => {
 
  // dates = [new Date(), new Date()];

  if(dates !== null && apartment !== null){
    return (
      <Wrapper>
        <ApartmentContainer>

          <AccountTitle>You have an apartment reservation!</AccountTitle>
          
          <ApartmentCard>
            <Link to={`/apartment/${apartment.id}`}>
              <ApartmentImg>
                <img src={apartment.img[0]} alt=""/>
                <div>
                  <span>{apartment.bathrooms} <i className="fa fa-bath"></i></span>
                  <span>{apartment.bedrooms} <i className="fa fa-bed"></i></span>
                </div>
              </ApartmentImg>
              <ApartmentName>
                <p>"{apartment.name}"</p>
              </ApartmentName>
            </Link>
          </ApartmentCard>
         
          <Flex>
            <Card>
              <p>From</p>
              <CardCalendar>
                <div>
                  <img src={reservationCalendar} alt=""/>
                </div>

                <span>{dates[0]}</span>
              </CardCalendar>
            </Card>

            <Card>
              <p>To</p>
              <CardCalendar>
                <div>
                  <img src={reservationCalendar} alt=""/>
                </div>

                <span>{dates[1]}</span>
              </CardCalendar>
            </Card>
          </Flex>
        
        </ApartmentContainer>

        <Key>
          <p>You can grab the apartment <i className="fa fa-key"></i> at <span>9:00 am</span> on reservation day</p>
          <p>Also, you must give the key back at the latest by <strong>9:00 pm</strong> the reservation ending day</p>
          
        </Key>

        {trips.length === 0 ? (
          <TripsContainer>
            <p>You don't have any upcoming trips.</p>
          </TripsContainer>
        ) : (
          <Fragment>
            <TripsTitle>You have a trip coming soon!</TripsTitle>
            <TripsPopulated>
              {trips.map((adventure, index) => {
                return (
                  
                    <TripsText key={index}>Adventure with <img src={adventure.guide.img} alt=""/> {adventure.guide.name} on <strong style={{margin: "0 5px"}}>{adventure.trip.name}</strong> starting on {adventure.trip.date} at {adventure.trip.departure} </TripsText> 
                
                )
              })}
            </TripsPopulated>
          </Fragment>
        )}

        {car === null ? (
          <CarContainer>
            <p>You didn't make any car reservation.</p>
          </CarContainer>
        ) : (
          <Fragment>
            <CarTitle>You have a car waiting in our place!</CarTitle>
            <CarWrapper>
              <div>Superfast {car.type} {car.mark} with {car.engine} engine is ready to be picked up!</div>
              <CarImage src={car.img} />
            </CarWrapper>
          </Fragment>
        )}

      </Wrapper>
    )
  } else {
    return (
      <Wrapper>
        <div style={{minHeight: "50vh"}}>
          <Outline>
            <OutlineContent>There is no reservation</OutlineContent>
          </Outline>
        </div>
      </Wrapper>
    )
  }
}
const mapStateToProps = state => ({
  reservation: state.reservation
})
export default connect(mapStateToProps)(Account)
