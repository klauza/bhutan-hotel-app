import React from 'react';
import Thumbnail from './Thumbnail';


const ThumbnailGrid = ({imgs, handleClick}) => {
  return (
    <div style={styles}>
      {imgs.map((img, index) => {
        return <Thumbnail key={index} img={img} index={index} handleClick={handleClick} />
      })}
      
     

    </div>
  )
}
const styles = {
  height: "35%",
  width: "100%",
  background: "#444",
  display: "flex",
  flexWrap: "wrap"
}
export default ThumbnailGrid
