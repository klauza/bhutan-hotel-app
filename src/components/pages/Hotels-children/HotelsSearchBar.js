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

       
        
          <input checked={selectedOrder==="asc" && "checked"} value="asc" type="radio" name="order" id="order-asc" onChange={e => handleOrder(e.target.value)}/>
          <label className="ascLabel"  htmlFor="order-asc">ASC</label>

        
          <input checked={selectedOrder==="desc" && "checked"} value="desc" type="radio" name="order" id="order-desc" onChange={e => handleOrder(e.target.value)}/>
          <label className="descLabel" htmlFor="order-desc">DSC</label>

        {/* <select value={selectedOrder} onChange={e => handleOrder(e.target.value)}>
          <option disabled value="default">Order</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select> */}
      </Wrapper>
    </SearchBar>
  )
}

export default HotelsSearchBar
