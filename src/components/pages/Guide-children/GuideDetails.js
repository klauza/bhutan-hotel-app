import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import { setTrip } from '../../../actions/reservationActions';
import { setAlert } from '../../../actions/alertActions';

import styled from 'styled-components';

import guidesData from './GuideData';
import {Wrapper, BackButton} from '../../layout/Elements';

// STYLES
const Grid = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media(max-width:768px){ grid-template-columns: 1fr; }

`;
const GridLeft = styled.div`
  justify-self: center;
  text-align: center;
  a{
    color: black;
    font-weight: 700;
  }
`;
const GridImage = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
`;
const GridGuideName = styled.p`
  font-size: 1.6rem;
`;
const GridRight = styled.div`
  @media(max-width:768px){ margin-top: 35px; height: auto; max-width: unset;}
  border: 2px solid black;
  position: relative;
  background: grey;
  height: 250px;
  max-width: 450px;
  display: flex; align-items: center;
  &::before{
    content: '';
    display: block;
    position: absolute; top: 50%; left: -21.5px; transform: translateY(-50%) rotateZ(45deg);
    width: 40px; height: 40px;
    background: grey;
    border-left: 2px solid black;
    border-bottom: 2px solid black;
    @media(max-width:768px){
      top: -21.5px; left: 50%; transform: translateX(-50%) rotateZ(45deg);
      border: 0; border-left: 2px solid black; border-top: 2px solid black;
    }
  }
`;
const GridRightTextContainer = styled.p`
  color: white;
  text-align: center;
  padding: 20px;
`;
const Separator = styled.hr`
  margin: 25px auto;
  width: 60%;
`;
const ExpertiseGrid = styled.div`
  width: 60%;
  margin: 0 auto 50px;
  @media(max-width: 768px){ width: 100%; }
`;
const ExpertiseTitle = styled.h2`
  text-align: center;
`;
const ExpertisePerks = styled.div`
  background: lightblue;
  margin-top: 15px;
  text-align: center;
  li{ list-style: none; line-height: 30px; font-weight: 700;}
  li:not(:first-child){ border-top: 1px solid black; }
`;
const TripsGrid = styled.div`
  width: 100%;
  margin: 100px auto;
  min-height: 50px;
  
`;
const TripsTitle = styled.h2`
  text-align: center;
`;
const TripTrip = styled.div`
  width: 100%;
  display: grid; grid-template-columns: 1fr;
  ul{
    li{ text-align: center; display: inline-block;   }
    button{
      display: block;
      color: white; 
      width: 100%; height: 100%;
      /* letter-spacing: 5px; */
      text-transform: uppercase;
      border: 1px solid black;
      background: green;
    }
    li:nth-child(6), li:nth-child(5){
      border: 0;
    }

    display: grid; justify-content: center; align-items: center;
    grid-template-rows: minmax(50px, auto);
    @media(min-width: 581px){ grid-template-columns: 88px 80px 68px 150px 60px 60px;  }
    @media(max-width: 580px){
      grid-template-columns: auto auto auto minmax(auto, 150px);
      justify-content: inherit;
      border-top: 1px solid black;
      &.trip > li:not(:first-child) { border-left: 1px solid black; }
      &.trip > li {  font-size: 0.85rem; }
      &.trip > li:nth-child(5),
      &.trip > li:nth-child(6) { 
        border: 0; 
      }

      li:nth-child(5){
        color: black;
        font-weight: 500;
        grid-column: 1 / 4;
        &:before{ content: "Price: "; }
        line-height: 40px;
      }
      li:nth-child(6){
        color: blue;
        grid-column: 4 / -1;
        button{
          width: 100%;
        }
      }
    }
  }

  .trips-header{
    font-weight: 700;
    font-size: 0.75rem;
    border: 0;
    /* border-bottom: 1px solid black; */
    
    @media(max-width: 580px){ li:nth-child(5), li:nth-child(6){ display: none; }}
  }
  .trip:nth-child(odd){
    background: #f5f5f5;
  }
  .trip > li{
   
    &:nth-child(5){ border: 0;}
    button{
      &:hover{
        cursor: pointer;
        background: rgb(0, 158, 0);
      }
    }
    &:nth-child(6){
      height: 60%;
    }
  }
`;
// styles-end
const GuideDetails = ({props, setTrip, setAlert, reservation}) => {
  const [thisGuide, setThisGuide] = useState(null)
  const [tripsSet, setTripsSet] = useState(null);

  useEffect(() =>{
    try{
      var { guide } = props.location.state
      setThisGuide(guide);
    } catch(err){
      
    }
    
    if(!guide){
      // if page entered from outer source, get guide from url as text and find him in local array
      const guideId = props.match.params.name;
      let name = guideId.replace(/-/i, ' ');
      
      guidesData.find(guide => guide.name.toLowerCase() === name && setThisGuide(guide));
    }
    
    setTripsSet(reservation.trips);

  //eslint-disable-next-line
  }, [reservation.trips]);

  console.log(tripsSet);
  
  const TripReservation = (trip) => {
    
    // data to save: [ trip ID | guide_name ]
    var theSame = reservation.trips ?  (
      reservation.trips.filter(same => same.trip.id === trip.id && same.guide.name === thisGuide.name)
    ) 
    : (null);
    
    // add trip if not added already
    theSame.length === 0 ? (
      setTrip({
        guide: {
          "name": thisGuide.name,
          "img": thisGuide.img  
        },
        trip: trip
      })
    ) : ( alert('you already have claimed a reservation on that trip') );

    
  }


  if(thisGuide){
  return (
    <Wrapper>
      <BackButton>Back</BackButton>
      <Grid>
        <GridLeft>
          <GridImage src={thisGuide.img} />
          <GridGuideName>{thisGuide.name}</GridGuideName>
          <i className="fa fa-phone"></i> <a href={`tel:+${thisGuide.phone}`}>{thisGuide.phone}</a>
        </GridLeft>

        <GridRight>
          <GridRightTextContainer>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, ex! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci vero quisquam blanditiis voluptas ut deserunt impedit libero ipsa perspiciatis, minus quis dicta, harum reprehenderit illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, deleniti quas quia beatae totam ipsum?
          </GridRightTextContainer>
        </GridRight>
      </Grid>

      <Separator/>

      <ExpertiseGrid>
        <ExpertiseTitle>Expertise</ExpertiseTitle>
        <ExpertisePerks>{thisGuide.expertise.map((perk,id) => <li key={id}>{perk}</li>)}</ExpertisePerks>
      </ExpertiseGrid>
    

      <TripsGrid>
        <TripsTitle>Trips</TripsTitle>
        <TripTrip>
          <ul className="trips-header">
            <li>Date</li>
            <li>Departure</li>
            <li>Return</li>
            <li>Name</li>
            <li>Price</li>
            <li></li>
          </ul>
          {thisGuide.trips.map(trip => { 
            return(
              <ul key={trip.id} className="trip">
                <li>{trip.date}</li>
                <li>{trip.departure}</li>
                <li>{trip.return}</li>
                <li>{trip.name}</li>
                <li>{trip.price}</li>
                <li> 
                  {reservation.apartment !== null ? (
                    <button onClick={() => TripReservation(trip)}>Buy</button> 
                  ) : (
                    <button onClick={() => setAlert("some stuff here", "blue") }>Buy</button>
                  )}
                  
                </li>
              </ul>
            )
          })}
        </TripTrip>
      </TripsGrid>


    </Wrapper>
  )

  } else {
    return (<Wrapper>
      <div style={{height: "50vh"}}></div>
      </Wrapper>)
  }
}
const mapStateToProps = (state, ownProps) => ({
  reservation: state.reservation,
  props: ownProps
})
export default connect(mapStateToProps, {setTrip, setAlert})(GuideDetails)
