import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import Guides from './Guides';
import Cars from './Cars';
import { Wrapper } from '../layout/Elements';
import { guides_hero_image, cars_hero_image } from '../../media/index';
// import history from '../../history';

// redux
import { connect } from 'react-redux';
import { setHiring } from '../../actions/sortingActions';

const HiringTopContainer = styled.div`
  width: 100%;
  height: auto;

  opacity: 0;
  transform: translateX(-150px);

  transition: all 500ms ease;
  transition-delay: 175ms, 175ms;
  transition-property: transform, opacity;

  margin: 10px auto 50px;
  display: flex;
  flex-direction: row;
  border: 2px solid black;
  border-radius: 3px;
  box-shadow: 0px 5px 6px -2px rgba(117, 117, 117, 0.65);
`;
const GuidesButton = styled.div`
  width: 100%;
  height: 240px;
  transition: filter 250ms ease;
  position: relative;
  filter: ${(props) =>
    props.isHighlighted
      ? 'brightness(1) grayscale(0)'
      : 'brightness(0.5) grayscale(70%)'};
  &:hover {
    cursor: pointer;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    color: #3f879c;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.5) 20%,
      rgba(0, 0, 0, 0.5) 80%,
      rgba(0, 0, 0, 0) 100%
    );
    width: 100%;
    text-align: center;

    text-transform: uppercase;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    /* background: #556677; */
    letter-spacing: 0.1em;
    text-shadow: #000 3px 5px 2px;
    /* color: white;  */
    font-weight: 700;
    font-size: 2em;
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
  }
`;
const CarsButton = styled.div`
  width: 100%;
  height: 240px;
  transition: filter 250ms ease;
  position: relative;
  filter: ${(props) =>
    props.isHighlighted
      ? 'brightness(1) grayscale(0)'
      : 'brightness(0.5) grayscale(70%)'};
  &:hover {
    cursor: pointer;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    color: #cf5151;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.5) 20%,
      rgba(0, 0, 0, 0.5) 80%,
      rgba(0, 0, 0, 0) 100%
    );
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    /* background: #556677; */
    letter-spacing: 0.1em;
    text-shadow: #000 3px 5px 2px;
    /* color: white;  */
    font-weight: 700;
    font-size: 2em;
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Hiring = ({ setHiring, sort: { hiring } }) => {
  const [hiringPage] = useState(hiring);
  // const [guidesHighlighted, setGuidesHighlighted] = useState(
  //   hiringPage === 'person' ? 'person' : 'car'
  // );
  // const [carsHighlighted, setCarsHighlighted] = useState(
  //   hiringPage === 'car' ? 'car' : 'person'
  // );

  useEffect(() => {
    window.scrollTo(0, 0);

    document.querySelectorAll('.hide-show').forEach((each) => {
      each.style.opacity = '1';
      each.style.transform = 'translateX(0px)';
    });
  }, []);

  const changeHiringPage = (data) => {
    if (data === 'person') {
      setHiring('person');
      // setGuidesHighlighted(!guidesHighlighted);
      // setCarsHighlighted(!carsHighlighted);
    }

    if (data === 'car') {
      setHiring('car');
      // setCarsHighlighted(!carsHighlighted);
      // setGuidesHighlighted(!guidesHighlighted);
    }
  };

  return (
    <Wrapper>
      <HiringTopContainer className="hide-show">
        <GuidesButton
          isHighlighted={hiring === 'person'}
          onClick={() => changeHiringPage('person')}
        >
          <img src={guides_hero_image} alt="" />
          <p>Guides</p>
        </GuidesButton>

        <CarsButton
          isHighlighted={hiring === 'car'}
          onClick={() => changeHiringPage('car')}
        >
          <img src={cars_hero_image} alt="" />
          <p>Cars</p>
        </CarsButton>
      </HiringTopContainer>

      {hiring === 'car' ? <Cars /> : <Guides />}
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
  sort: state.sort,
});
export default connect(mapStateToProps, { setHiring })(Hiring);
