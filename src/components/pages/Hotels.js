import React, {useRef, Fragment, useState, useEffect} from 'react';
import HotelCard from './Hotels-children/HotelCard';
import HotelsSearchBar from './Hotels-children/HotelsSearchBar';

import { orderBy } from "lodash";

import {connect} from 'react-redux';
import {loadHotels, sortByType, sortByOrder, saveCardId} from '../../actions/sortingActions';

import history from '../../history';


const Hotels = ({sort: {hotels, sortType, sortOrder, cardId, loading}, loadHotels, sortByType, sortByOrder, saveCardId}) => {

  // const [hotel, setHotel] = useState(data.hotels[0]);
  const [collection, setCollection] = useState(null);
  // const [sortParams, setSortParams] = useState({direction: undefined});

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
      // await goToCardId();
       
      
      // await window.scrollTo(0, 1200);
    }

    // function goToCardId(){
    //     if(cardId === null) return
    //     history.push(`/hotel-list/#${cardId}`)
    // }


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


  const saveRoomId = (e) => {
    saveCardId(e);
  }


  if(!unblock){
    return (
      <Fragment>
          <HotelsSearchBar selectedOption={selectedOption} selectedOrder={selectedOrder} handleType={handleType} handleOrder={handleOrder} />
          
        {
          collection && collection.map(hotel =>  <HotelCard saveRoomId={saveRoomId} key={hotel.id} hotel={hotel}/> )
        }
      
      </Fragment>
    )
  } else{
    return (<div></div>)
  }
}



const mapStateToProps = state => ({
  sort: state.sort
})
export default connect(mapStateToProps, {loadHotels, sortByType, sortByOrder, saveCardId})(Hotels)

