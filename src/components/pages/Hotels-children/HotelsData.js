import { room1_1, room1_2, room1_3, room2_1, room2_2, room2_3, room2_4, room3_1, room3_2, room3_3, room3_4, room4_1, room4_2, room5_1, room5_2, room5_3, room5_4, room6_1, room7_1, room7_2, room7_3, room7_4 } from '../../../media/index';

const data = {
  "hotels": [
    {
      "id": 0,
      "name": "Flat with prestigious spaces",
      "img": [room1_1, room1_2, room1_3],
      "price": 325,
      "bedrooms": "1",
      "bathrooms": "1",
      "features": [`49" smart TV`, "In-room Nespresso coffee machine", "Telephone", "24‐hour butler service", "Wi-Fi"],
      "rating": "96%"
    },
    {
      "id": 1,
      "name": "A flat with amazing views",
      "img": [room2_1, room2_2, room2_3, room2_4],
      "price": 790,
      "bedrooms": "2",
      "bathrooms": "2",
      "features": ["Spacious bathrooms", "Wi-Fi", "Telephone", "settled on 1st floor"],
      "rating": "93%"
    },
    {
      "id": 2,
      "name": "Halls of mild energy",
      "img": [room3_1, room3_2, room3_3, room3_4],
      "price": 1050,
      "bedrooms": "3",
      "bathrooms": "1",
      "features": ["Sauna", "Private balcony", "Wi-Fi", `50" smart TV`],
      "rating": "97%"
    },
    {
      "id": 3,
      "name": "Pool-flat",
      "img": [room4_1, room4_2],
      "price": 1600,
      "bedrooms": "4",
      "bathrooms": "2",
      "features": ["indoor pool", "Wi-Fi", "Telephone", "few dressing-gowns"],
      "rating": "99%"
    },
    {
      "id": 4,
      "name": "Spacious family flat",
      "img": [room5_1, room5_2, room5_3, room5_4],
      "price": 800,
      "bedrooms": "2",
      "bathrooms": "2",
      "features": ["Spactious rooms", "Huge dorm", "double bathroom", "Wi-Fi"],
      "rating": "95%"
    },
    {
      "id": 5,
      "name": "Studio with Everything",
      "img": [room6_1],
      "price": 235,
      "bedrooms": "1",
      "bathrooms": "1",
      "features": ["Minimalistic interiors", "Cosy"],
      "rating": "86%"
    },
    {
      "id": 6,
      "name": "Simple but modern",
      "img": [room7_1, room7_2, room7_3, room7_4],
      "price": 1250,
      "bedrooms": "2",
      "bathrooms": "1",
      "features": ["Sauna", "Balcony", `2x 39" TV`],
      "rating": "99%"
    }
  ]
}

export default data