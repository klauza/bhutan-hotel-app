import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import MainCarrousel from './Main-children/MainCarousel';
import MainCards from './Main-children/MainCards';
import styled from 'styled-components';
import { Wrapper } from '../layout/Elements';
import { logo1, logo2, logo3, logo4, carImg } from '../../media/index';

const Sponsors = styled.div`
  width: 100%;
  height: auto;
  margin-top: 100px;
  margin-bottom: 150px;
  /* background: #f2f5f7; */
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid lightgrey;
  border-top: 1px solid lightgrey;
  background: rgba(255, 255, 255, 0.35);
  p,
  h1 {
    margin-top: 12.5px;
    text-align: center;
    letter-spacing: 3px;
    font-weight: 700;
    /* font-size: 1.5rem; */
    /* text-transform: uppercase; */
  }

  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    margin: 0 10px;
    transition: all 300ms ease;
    &:hover {
      transition: all 300ms ease;
      transform: rotate(10deg);
    }
  }
`;
const SponsorsLogos = styled.div`
  height: 70px;
  margin: 12.5px auto;
  /* width: 400px; // 180px */
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  display: flex;
  flex-direction: row;
  justify-items: center;
  @keyframes moveSlideshow {
    100% {
      transform: translateX(-66.6666%);
    }
  }

  // .mover
  & > div {
    height: 70px;
    height: 100%;
    width: 640px; // 480px
    position: absolute;
    top: 0;
    left: 0;
    transform: translate3d(0, 0, 0);
    &:hover {
      animation-play-state: paused;
    }
  }

  .mover {
    animation: moveSlideshow 4s linear infinite;
  }
`;

const AboutCountry = styled.div`
  h1 {
    margin-top: 20px;
  }
  p {
    font-size: 1.1rem;
    margin-top: 5px;
    line-height: 150%;

    text-align: justify;
  }
`;

const Description = styled.div`
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  margin: 50px 0 150px;
  text-align: center;
  width: 100%;
  padding: 4rem 2rem;
  background-color: rgba(255, 255, 255, 0.35);
  display: block;
  h1 {
    letter-spacing: 3px;
    font-weight: 700;
  }
  p {
    font-size: 1.1rem;
  }
  p:nth-child(2) {
    margin: 20px 0;
  }
`;
const CarDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: space-between;
  margin: 100px 5px 100px;
`;
const CarDesc = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  margin-right: 10px;
`;
const CarTopDesc = styled.h3`
  text-align: right;
`;
const CarTitle = styled.h1`
  text-align: center;
  margin-top: 20px;
  &:after {
    content: '';
    background: #d4d4d4;
    width: 100%;
    height: 3px;
    border: 0;
    border-radius: 35px;
    /* margin-left: auto; */
    margin: 5px 0 25px auto;
    display: block;
  }
`;

const CarButton = styled.button`
  border: 0;
  border-radius: 4px;
  padding: 10px;
  background: green;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;
const CarImage = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Main = () => {
  return (
    <Fragment>
      <MainCarrousel />

      <Sponsors>
        <h1>Collaborators</h1>
        <SponsorsLogos>
          {/* <div className="mover"> */}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.google.com/"
          >
            <img src={logo1} alt="" />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.google.com/"
          >
            <img src={logo2} alt="" />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.google.com/"
          >
            <img src={logo3} alt="" />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.google.com/"
          >
            <img src={logo4} alt="" />
          </a>

          {/* </div> */}
        </SponsorsLogos>
      </Sponsors>

      <Wrapper>
        <AboutCountry>
          <h1>Land of Thunder Dragon</h1>
          <p>
            Druk is the “Thunder Dragon” in Bhutanese and Tibetan mythology. It
            is also the Bhutanese national symbol. You can find the Druk
            appearing on the flag of Bhutan, holding jewels to represent wealth.
            Bhutan is called the land of the Thunder Dragon, a reference to its
            wild thunderstorms striking the valleys from the peaks of the
            Himalayas. The dazzling light of thunder was believed to be the fire
            from a dragon.
          </p>

          <h1>Buddhism</h1>
          <p>
            The origins of Buddhism come from India: the prince Siddhartha
            Gautama. After he was born, many knew he was more than just a
            prince, but his parents did not want him to discover this, so he was
            kept in isolation. A sage predicted that the prince would either
            become a powerful king or great spiritual leader. After he finally
            approached to the outside world, he decided to become an ascetic and
            wandered the world in an attempt to find a way to end all suffering.
            He finally reached enlightenment and became the Buddha while
            meditating under a banyan tree. His dharma includes the Four Noble
            Truths and the Eight-Fold Path to Enlightenment.
          </p>

          <h1>The Land of Happiness</h1>
          <p>
            Completely cut off for centuries, Bhutan still fiercely guards its
            ancient traditions and Buddhist customs. Bhutan is a small Himalayan
            kingdom known for its breathtaking landscapes, unique culture, happy
            people, majestic monasteries and fluttering flags. National dress -
            the knee-length wrap-around "gho" for men and the ankle-length dress
            known as the "kira" for women, is compulsory. Bhutan is called ‘The
            Land of Happiness’ and yes it is truly one of the happiest countries
            in the world where Gross National Happiness is more important than
            Gross National Product. Happiness is crutial in Bhutan so they even
            established a Gross National Happiness (GNH) Commission. GNH
            Commission, which ensures that everything the country does, should
            contribute to the overall well-being and happiness of its people.
            The pursuit of GNH is also enshrined in the country’s constitution.
            The GNH index is based on four pillars – cultural preservation,
            environment protection, good governance and sustainable
            socio-economic development.
          </p>

          <h1>Tourism</h1>
          <p>
            Besides simply immersing yourself in daily life on the streets in
            Paro and the markets of Thimphu, one of the highlights of travelling
            to Bhutan is a visit to the Taktsang Monastery 'Tiger's Nest'
            nestled on the cliff edge high above the Paro Valley. Said to have
            been one of the divine resting places of the Guru Ringpoche, it is
            worthwhile to ascend the walking trail to appreciate the monastery's
            breathtaking location on a cliff edge about 800 metres above the
            valley. As part of its proud Buddhist culture, Bhutan is home to a
            large number of festivals held throughout the year that add even
            more colour and vibrance to any journey here. World Expeditions runs
            a number of special trips to get you to these festivals Tshechus are
            Buddhist religious festivals held around the Dzong (fortress
            monastery) and generally last several days. The Paro Tshecu, held in
            April, is a bright, colourful affair with hundreds of people from
            the city and surrounding countryside filling the courtyards and
            temple grounds to watch and participate in the event. Masked dances
            are performed by trained Buddhist monks. The Thimphu Tsechu is held
            in the courtyard of the Tashichho Dzong around September, and the
            Bhutanese come from all over the country, dressed in their finest
            clothes to attend. It is believed that those who witness the
            festival will be brought much luck and their wishes and dreams
            realised.
          </p>
        </AboutCountry>
      </Wrapper>

      <Description>
        <h1>By travellers for travellers</h1>

        <p>
          We used to be travellers too, just like you. Discovering new horizons,
          <br />
          broadening knowledge, meeting new interesting people.
        </p>

        <p>
          Now our goal is to help you achieve even something bigger. <br />
          We help you to find answers and provide a needed comfort.
        </p>
      </Description>

      <Wrapper>
        <MainCards />

        <CarDiv>
          <CarDesc>
            <CarTopDesc>
              Would you like to speed up your exploration?
            </CarTopDesc>
            <CarTitle>Rent a car!</CarTitle>
            <Link to="/hiring">
              <CarButton>Check deals</CarButton>{' '}
            </Link>
          </CarDesc>

          <CarImage>
            <img src={carImg} alt="" />
          </CarImage>
        </CarDiv>
      </Wrapper>
    </Fragment>
  );
};

export default Main;
