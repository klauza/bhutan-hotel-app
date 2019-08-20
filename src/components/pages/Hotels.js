import React, {Fragment, useState, useEffect} from 'react'
// import data from './Hotels-children/HotelsData';
import HotelCard from './Hotels-children/HotelCard';
import { orderBy } from "lodash";
import {loadHotels, sortByType, sortByOrder} from '../../actions/sortingActions';

import {connect} from 'react-redux';

const Hotels = ({sort: {hotels, sortType, sortOrder}, loadHotels, sortByType, sortByOrder}) => {

  // const [hotel, setHotel] = useState(data.hotels[0]);
  const [collection, setCollection] = useState(null);
  const [sortParams, setSortParams] = useState({direction: undefined});

  const [selectedOption, setSelectedOption] = useState("default");
  const [selectedOrder, setSelectedOrder] = useState("default");

  
  useEffect(() => {
    async function loadHotelSDOM(){
      await loadHotels();
      await setSelectedOrder(sortOrder);
      await setSelectedOption(sortType);
      await setCollection(hotels);
      await sortOnPageInit();
    }

    loadHotelSDOM();

    if(sortType){

    }

    

    

  }, [hotels])

  const sortOnPageInit = () => {
    if(sortType === "default" || sortOrder === "default"){
      return
    } 

    const sortedCollection = orderBy(hotels, [sortType], [sortOrder]);  // Sort collection  
    
    setCollection(sortedCollection);  //Update component state with new data
    console.log(sortedCollection);
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
        <div style={searchBar}>
          Search by: 
          <select value={selectedOption} onChange={e => handleColumnHeaderClick(e.target.value)}>
            <option disabled className="blockDefault" value="default">Sort by</option>
            <option value="price">Price</option>
            <option value="bedrooms">Bedrooms</option>
            <option value="bathrooms">Bathrooms</option>
          </select>

          Order
          <select value={selectedOrder} onChange={e => handleOrder(e.target.value)}>
            <option disabled value="default">Order</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        
        {
          collection.map(hotel =>  <HotelCard key={hotel.id} hotel={hotel}/> )
        }
      
        
      </Fragment>
    )
  } else{
    return (<div>Loading</div>)
  }
}
const searchBar = {
  "position": "relative",
  "top": "0",
  "width": "100%",
  "height": "56px",
  "backgroundColor": "rgba(225,215,255,0.8)",
  "zIndex": "33"
}

const mapStateToProps = state => ({
  sort: state.sort
})
export default connect(mapStateToProps, {loadHotels, sortByType, sortByOrder})(Hotels)

