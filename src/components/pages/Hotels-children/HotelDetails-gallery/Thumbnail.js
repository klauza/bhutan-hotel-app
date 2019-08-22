import React from 'react'

const Thumbnail = ({img, index, handleClick}) => {
  return (
    <div style={styles}>
      <img onClick={handleClick} data-index={index} src={img} alt="" style={{width: "100%", height: "100%", objectFit: "cover"}}/>
    </div>
  )
}

const styles = {
  height: "50%",
  width: "25%",
  background: "red",
  display: "flex"
}
export default Thumbnail
