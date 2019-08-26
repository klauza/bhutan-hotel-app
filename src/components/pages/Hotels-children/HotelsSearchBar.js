import React from 'react';
import styled from 'styled-components';

// STYLES
const HotelsHeaderBar = styled.div`
  height: auto;
  width: 100%;
  background: whitesmoke;
`;
const HotelTopText = styled.div`
  width: 60%; height: auto;
  margin: 25px auto -25px auto;
  display: flex; flex-direction: column;
  justify-content: start;
  text-align: center;
  border: 2px solid black; border-radius: 3px;
  box-shadow: 0px 7px 6px -2px rgba(117,117,117,0.65);
  z-index: 99;
  position: relative;
  background: whitesmoke;
  p:nth-child(1){
    background: black;
    color: white;
    font-size: 1.55em;
    font-weight: 700;
  }
  p:nth-child(2){
    padding: 15px;
  }
`;
const SearchBar = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  height: 56px;
  margin: 25px auto 0 auto;
`;
const Wrapper = styled.div`
  width: 70%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Select = styled.select`
  background-color: white;
  border: 1px solid grey; border-radius: 3px;
  height: 60%;
  width: 160px;
  display: inline-block;
  padding-left: 10px;
  font-weight: 700;
  -webkit-appearance: none;
  -moz-appearance: none;

  background-image:
    linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%),
    linear-gradient(to right, #ccc, #ccc);
  background-position:
    calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px),
    calc(100% - 2.5em) 0.5em;
  background-size:
    5px 5px,
    5px 5px,
    1px 1.5em;
  background-repeat: no-repeat;




`;

const Input = styled.input`

  &[type="radio"] {
    opacity: 0;
  }
  &[type="radio"] + label::after{
    content: none;
  }
  &[type="radio"]:checked + label::after {
    content: "";
  }
  &[type="radio"]:focus + label::before {
    outline: rgb(59, 153, 252) auto 5px;
  }
`;

const Label = styled.label`

  position: relative;
  top: 18px;
  display: block;

  &::before, &::after{
    content:'';
    position: absolute;
    display: block;
    margin-top: -5px;
  }
  
  &::before{
    height: 32px; width: 32px;
    border: 1px solid; background: white;
    left: 50%; top: -27px;
    transform: translateX(-50%);
  }
  &::after {
    content:"";
    height: 10px; width: 18px;
    border-left: 2px solid; border-bottom: 2px solid;
    top: -18px; left: 6px;
    transform: rotate(-45deg);
  }

`;

// end-styles

const HotelsSearchBar = ({selectedOption, selectedOrder, handleType, handleOrder}) => {
  return (
    <HotelsHeaderBar>
      <SearchBar>
        <Wrapper>
          
          <Select className="select-type" value={selectedOption} onChange={e => handleType(e.target.value)}>
            <option disabled className="blockDefault" value="default">Sort by</option>
            <option value="price">Price</option>
            <option value="bedrooms">Bedrooms</option>
            <option value="bathrooms">Bathrooms</option>
          </Select>

          <Input checked={selectedOrder==="asc" && "checked"} value="asc" type="radio" name="order" id="order-asc" onChange={e => handleOrder(e.target.value)}/>
          <Label htmlFor="order-asc">ASC</Label>

          <Input checked={selectedOrder==="desc" && "checked"} value="desc" type="radio" name="order" id="order-desc" onChange={e => handleOrder(e.target.value)}/>
          <Label htmlFor="order-desc">DSC</Label>

        </Wrapper>
      </SearchBar>
      <HotelTopText>
        <p>We offer a vast amount of comfortable rooms.</p>
        <p>Price refers to daily stay. Also, these rooms used to be inhabited by progenitors. Feel their presence and absorb the energy, acquire relax from subtle healthy flow of scent.</p> 
      </HotelTopText>
    </HotelsHeaderBar>
  )
}

export default HotelsSearchBar
