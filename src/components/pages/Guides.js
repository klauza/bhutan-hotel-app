import React from 'react'
import GuideList from './Guide-children/GuideList';
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row'

const guides = [
  {
    "id": 1,
    "name": "Elizabeth Smith",
    "img": "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "experience": 3
  },
  {
    "id": 2,
    "name": "Mike Dande",
    "img": "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "experience": 1
  },
  {
    "id": 3,
    "name": "Merlin Noe",
    "img": "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "experience": 4
  },
  {
    "id": 4,
    "name": "Sarah Casana",
    "img": "https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "experience": 5
  },
  {
    "id": 5,
    "name": "George Bmw",
    "img": "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "experience": 3
  },
  {
    "id": 6,
    "name": "Joe Berlin",
    "img": "https://images.pexels.com/photos/1250426/pexels-photo-1250426.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "experience": 5
  },
  {
    "id": 7,
    "name": "Martha Sosenko",
    "img": "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "experience": 4
  },
  {
    "id": 8,
    "name": "Sarah Casana",
    "img": "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "experience": 5
  }

]

const Guides = () => {
  return (
    <Container>
      <p className="text-center">Rent a guide and let him lead your adventure to a higher level of exploration.</p>
      <p className="text-center">Our guides have huge knowledge of locale events and awesome views.</p>
      <Row style={{"margin": "50px 0px"}}>
        {guides.map(guide => <GuideList guide={guide} /> )}
      </Row>
    </Container>
  )
}

export default Guides
