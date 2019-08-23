import React from 'react';
import styled from 'styled-components';

// STYLES
const SearchBar = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  height: 56px;
  margin: 0 auto;
  background-color: rgba(225,215,255,0.8);
  z-index: 33;
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
  height: 100%;
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
  top: 20px;
  display: block;

  &::before, &::after{
    content:'';
    position: absolute;
    display: block;
  }
  &::before{
    height: 32px; width: 32px;
    border: 1px solid;
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

const HotelsSearchBar = ({selectedOption, selectedOrder, handleColumnHeaderClick, handleOrder}) => {
  return (
    <SearchBar>
      <Wrapper>
        
        <Select value={selectedOption} onChange={e => handleColumnHeaderClick(e.target.value)}>
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
  )
}

export default HotelsSearchBar
