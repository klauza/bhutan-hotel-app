import React from 'react';
import {connect} from 'react-redux';
import { Wrapper } from '../layout/Elements';
import styled from 'styled-components';
import { reservationCalendar } from '../../media/index';

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
const AccountContainer = styled.div`
  display: flex; flex-direction: column;
`;
const AccountTitle = styled.h2`
  color: green;
  text-align: center;
  margin: 100px 0 50px;
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
const Key = styled.div`
  width: 80%; height: auto;
  max-width: 900px; 
  margin: 50px auto;
  text-align: center;
  p > span {
    color: red;
  }
`;
// end-styles

const Account = ({ reservation: {dates} }) => {
 
  // dates = [new Date(), new Date()];

  if(dates !== null){
    return (
      <Wrapper>
        <AccountContainer>

          <AccountTitle>You have an apartment reservation!</AccountTitle>

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
        
        </AccountContainer>

        <Key>
          <p>You can grab the apartment <i className="fa fa-key"></i> at <span>9:00 am</span> on reservation day</p>
          <p>Also, you must give the key back at the latest by <strong>9:00 am</strong> the reservation ending day</p>
          
        </Key>
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
