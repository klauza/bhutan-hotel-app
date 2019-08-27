import React, { useState, useEffect} from 'react';
import HotelCard from './Hotels-children/HotelCard';
import HotelsSearchBar from './Hotels-children/HotelsSearchBar';
import styled from 'styled-components';
import { Wrapper } from '../layout/Elements';

import { orderBy } from "lodash";

import {connect} from 'react-redux';
import {loadHotels, sortByType, sortByOrder, pageLocation} from '../../actions/sortingActions';

// STYLES
const HotelContainer = styled.div`
  background: white;
  overflow: hidden;
`;
// end-styles

const Hotels = ({sort: {hotels, sortType, sortOrder, pageLocY, loading}, loadHotels, sortByType, sortByOrder, pageLocation}) => {

  const [collection, setCollection] = useState(null);
  const [selectedOption, setSelectedOption] = useState("default");
  const [selectedOrder, setSelectedOrder] = useState("asc");
  const [unblock, setUnblock] = useState(true);

  
  useEffect(() => {
    async function loadHotelSDOM(){
      await loadHotels();
      await setSelectedOrder(sortOrder);
      await setSelectedOption(sortType);
      await setCollection(hotels);
      await sortOnPageInit();
      await setUnblock(false);

      await window.scrollTo(0, pageLocY);
    }

    loadHotelSDOM();

    //eslint-disable-next-line
  }, [hotels])

  const sortOnPageInit = () => {
    if(sortType === "default" || sortOrder === "default"){
      return
    } 
    const sortedCollection = orderBy(hotels, [sortType], [sortOrder]);  // Sort collection  
    
    setCollection(sortedCollection);  //Update component state with new data
  }

  const handleType = (event) => {
    sortByType(event);

    document.querySelector('.blockDefault').disabled = true;
    let sortKey = event;
    setSelectedOption(event);
    
    if(selectedOrder !== "default"){
      const sortedCollection = orderBy(collection, [sortKey], [selectedOrder]);  // Sort collection  
      
      setCollection(sortedCollection);  //Update component state with new data
    }
  }

  const handleOrder = (event) => {
    sortByOrder(event);
    
    setSelectedOrder(event);
    
    const sortDirection = event;

    if(selectedOption !== "default"){
      const sortedCollection = orderBy(collection, [selectedOption], [sortDirection]);  // Sort collection 
      setCollection(sortedCollection);  //Update component state with new data
    }
    
  }


  const saveRoomLoc = () => {
    pageLocation(window.pageYOffset);

  }


  if(!unblock){
    return (
      <Wrapper>
      <HotelContainer>
          <HotelsSearchBar selectedOption={selectedOption} selectedOrder={selectedOrder} handleType={handleType} handleOrder={handleOrder} />
          <hr/>
        {
          collection && collection.map(hotel =>  <HotelCard saveRoomLoc={saveRoomLoc} key={hotel.id} hotel={hotel}/> )
        }
      
      </HotelContainer>
      </Wrapper>
    )
  } else{
    return ( <Wrapper>
      <div style={{height: "100vh"}}></div>
      </Wrapper>)
  }
}



const mapStateToProps = state => ({
  sort: state.sort
})
export default connect(mapStateToProps, {loadHotels, sortByType, sortByOrder, pageLocation})(Hotels)

