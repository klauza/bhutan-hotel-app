import React, {Fragment, useState, useEffect} from 'react';
import HotelCard from './Hotels-children/HotelCard';
import HotelsSearchBar from './Hotels-children/HotelsSearchBar';
import styled from 'styled-components';

import { orderBy } from "lodash";

import {connect} from 'react-redux';
import {loadHotels, sortByType, sortByOrder} from '../../actions/sortingActions';

// STYLES
const HotelTopText = styled.div`
  width: 100%; height: 200px;
  border: 2px solid red;
  display: flex; flex-direction: column;
  justify-content: center;
  text-align: center;
  p:nth-child(1){
    margin: 10px 0;
    font-size: 1.4em;
    font-weight: 700;
  }
`;
// styles-end


const Hotels = ({sort: {hotels, sortType, sortOrder}, loadHotels, sortByType, sortByOrder}) => {

  // const [hotel, setHotel] = useState(data.hotels[0]);
  const [collection, setCollection] = useState(null);
  // const [sortParams, setSortParams] = useState({direction: undefined});

  const [selectedOption, setSelectedOption] = useState("default");
  const [selectedOrder, setSelectedOrder] = useState("asc");

  
  useEffect(() => {
    async function loadHotelSDOM(){
      await loadHotels();
      await setSelectedOrder(sortOrder);
      await setSelectedOption(sortType);
      await setCollection(hotels);
      await sortOnPageInit();
       
      
      await window.scrollTo(0, 0);
    }

    loadHotelSDOM();
  

    // if(sortType){

    // }
    //eslint-disable-next-line
  }, [hotels])

  const sortOnPageInit = () => {
    if(sortType === "default" || sortOrder === "default"){
      return
    } 

    const sortedCollection = orderBy(hotels, [sortType], [sortOrder]);  // Sort collection  
    
    setCollection(sortedCollection);  //Update component state with new data
    
  }

  const handleColumnHeaderClick = (event) => {
    sortByType(event);

    document.querySelector('.blockDefault').disabled = true;
    let sortKey = event;
    setSelectedOption(event);
    
    if(selectedOrder !== "default"){
      const sortedCollection = orderBy(collection, [sortKey], [selectedOrder]);  // Sort collection  
      
      setCollection(sortedCollection);  //Update component state with new data
      
      // setSortParams({direction: sortDirection});  //Update component state with new data
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




  if(collection){
    return (
      <Fragment>
        <HotelsSearchBar selectedOption={selectedOption} selectedOrder={selectedOrder} handleColumnHeaderClick={handleColumnHeaderClick} handleOrder={handleOrder} />
        <HotelTopText>
          <p>Each hotel flat has it's own history. </p>
          <p>Keep in mind that you will be sleeping in progenitors' rooms. Feel and absorb their energy, fill your mind with it, obtain their clear relaxing flow.</p> 
        </HotelTopText>

        {
          collection.map(hotel =>  <HotelCard key={hotel.id} hotel={hotel}/> )
        }
      
      </Fragment>
    )
  } else{
    return (<div style={{minHeight: "150vh"}}></div>)
  }
}



const mapStateToProps = state => ({
  sort: state.sort
})
export default connect(mapStateToProps, {loadHotels, sortByType, sortByOrder})(Hotels)

