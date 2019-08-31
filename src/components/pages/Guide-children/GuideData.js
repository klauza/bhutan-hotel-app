import {guide_1, guide_2, guide_3, guide_4, guide_5, guide_6, guide_7, guide_8} from '../../../media/index';


var date = new Date(); 
// eslint-disable-next-line
Date.prototype.addDays = function(days) { 
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}
const guidesData = [
  {
    "id": 1,
    "name": "Elizabeth Smith",
    "img": guide_1,
    "experience": 3,
    "expertise": ["very talkative", "big knowledge about Bhutan towns", "knows secret forest paths"],
    "phone": "07327436896",
    "trips": [
      {
        "id": 1,
        "date": `${date.addDays(5).toLocaleDateString("en-GB")}`,
        "name": "To Kuruthang city",
        "price": 120,
        "departure": "10:00am",
        "return": "19:00pm"
      },
      {
        "id": 2,
        "date": `${date.addDays(7).toLocaleDateString("en-GB")}`,
        "name": "Exploring Thimphu",
        "price": 50,
        "departure": "12:00am",
        "return": "16:00pm"
      },
      {
        "id": 3,
        "date": `${date.addDays(8).toLocaleDateString("en-GB")}`,
        "name": "Exploring Thimphu",
        "price": 50,
        "departure": "12:00am",
        "return": "16:00pm"
      }
    ]
  },
  {
    "id": 2,
    "name": "Mike Dande",
    "img": guide_2,
    "experience": 1,
    "expertise": ["fast walk", "knowledge of nearby events", "honest and agreeable"],
    "phone": "07223133491",
    "trips": [ ]
  },
  {
    "id": 3,
    "name": "Merlin Noe",
    "img": guide_3,
    "experience": 4,
    "expertise": ["daily traveller", "public speaker", "has many local friends", "open-minded"],
    "phone": "07447466192",
    "trips": [ ]
  },
  {
    "id": 4,
    "name": "Sarah Casana",
    "img": guide_4,
    "experience": 5,
    "expertise": ["fast walk", "knows spectacular view locations"],
    "phone": "07005433826",
    "trips": [ ]
  },
  {
    "id": 5,
    "name": "George Bmw",
    "img": guide_5,
    "experience": 3,
    "expertise": ["survival skills", "ruins explorator", "vast knowledge about myths and legends"],
    "phone": "07115432453",
    "trips": [ ]
  },
  {
    "id": 6,
    "name": "Joe Berlin",
    "img": guide_6,
    "experience": 5,
    "expertise": ["fast walk"],
    "phone": "07221429012",
    "trips": [ ]
  },
  {
    "id": 7,
    "name": "Martha Sosenko",
    "img": guide_7,
    "experience": 4,
    "expertise": ["good city exploration", "interested in local music", "has map in her head"],
    "phone": "07907239812",
    "trips": [ ]
  },
  {
    "id": 8,
    "name": "Marie Gondor",
    "img": guide_8,
    "experience": 5,
    "expertise": ["interested in local music", "very talkative", "storyteller"],
    "phone": "07207173355",
    "trips": [ ]
  }

]

export default guidesData