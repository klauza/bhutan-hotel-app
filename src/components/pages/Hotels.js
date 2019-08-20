import React, {Fragment, useState} from 'react'
import data from './Hotels-children/HotelsData';
import HotelCard from './Hotels-children/HotelCard';
import { orderBy } from "lodash";

const Hotels = () => {

  // const [hotel, setHotel] = useState(data.hotels[0]);
  const [collection, setCollection] = useState(data.hotels);
  const [sortParams, setSortParams] = useState({direction: undefined});
  const [selectedOption, setSelectedOption] = useState("default");
  const [selectedOrder, setSelectedOrder] = useState("asc");
  

  const handleColumnHeaderClick = (event) => {
    document.querySelector('.blockDefault').disabled = true;
    let sortKey = event;
    setSelectedOption(event);
    
    const sortedCollection = orderBy(collection, [sortKey], [selectedOrder]);  // Sort collection  
    
    setCollection(sortedCollection);  //Update component state with new data
    
    // setSortParams({direction: sortDirection});  //Update component state with new data
    
  }

  const handleOrder = (event) => {
    
    setSelectedOrder(event);

    // const sortDirection = sortParams.direction === "desc" ? "asc" : "desc";  // Check, what direction now should be
    const sortDirection = event;


    const sortedCollection = orderBy(collection, [selectedOption], [sortDirection]);  // Sort collection 
    setCollection(sortedCollection);  //Update component state with new data
  
  }

  return (
    <Fragment>
      <div style={searchBar}>
        Search by: 
        <select value={selectedOption} onChange={e => handleColumnHeaderClick(e.target.value)}>
          <option className="blockDefault" value="default">Sort by</option>
          <option value="price">Price</option>
          <option value="bedrooms">Bedrooms</option>
          <option value="bathrooms">Bathrooms</option>
        </select>

        Order
        <select value={selectedOrder} onChange={e => handleOrder(e.target.value)}>
          <option disabled>Order</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      
      {
        collection.map(hotel =>  <HotelCard key={hotel.id} hotel={hotel}/> )
      }
     
      
    </Fragment>
  )
}
const searchBar = {
  "position": "sticky",
  "top": "0",
  "width": "100%",
  "height": "56px",
  "backgroundColor": "rgba(225,215,255,0.8)",
  "zIndex": "33"
}

export default Hotels
