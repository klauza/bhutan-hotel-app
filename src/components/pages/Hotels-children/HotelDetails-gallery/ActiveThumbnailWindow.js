import React from 'react'

const ActiveThumbnailWindow = ({activeThumbnail}) => {
  
  return (
    <div style={styles}>
      <img src={activeThumbnail} alt="" style={{width: "100%", height: "100%", objectFit: "cover"}}/>
    </div>
  )
}

const styles = {
  height: "65%",
  width: "100%",
  background: "#333"
}
export default ActiveThumbnailWindow
