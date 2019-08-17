import React, {Fragment} from 'react'
import Card from 'react-bootstrap/Card';

const HotelImage = ({image, id}) => {

  return (
    <Fragment>
      <Card.Img variant="top" src={image} className={`card card-${id}`}/>
    </Fragment>
  )
}

export default HotelImage
