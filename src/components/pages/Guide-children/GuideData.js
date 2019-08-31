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
        "name": "Trip to Kuruthang city",
        "price": 120,
        "departure": "10:00am",
        "return": "7:00pm"
      },
      {
        "id": 2,
        "date": `${date.addDays(7).toLocaleDateString("en-GB")}`,
        "name": "Exploring Thimphu",
        "price": 50,
        "departure": "12:00am",
        "return": "4:00pm"
      },
      {
        "id": 3,
        "date": `${date.addDays(8).toLocaleDateString("en-GB")}`,
        "name": "Exploring Thimphu",
        "price": 50,
        "departure": "12:00am",
        "return": "4:00pm"
      },
      {
        "id": 4,
        "date": `${date.addDays(10).toLocaleDateString("en-GB")}`,
        "name": "Trip to Kuruthang city",
        "price": 120,
        "departure": "10:00am",
        "return": "7:00pm"
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
    "trips": [
      {
        "id": 1,
        "date": `${date.addDays(3).toLocaleDateString("en-GB")}`,
        "name": "Sky watching at night",
        "price": 45,
        "departure": "11:00pm",
        "return": "2:00am"
      },
      {
        "id": 2,
        "date": `${date.addDays(4).toLocaleDateString("en-GB")}`,
        "name": "Exploring southern Thimphu",
        "price": 50,
        "departure": "12:00am",
        "return": "5:00pm"
      }
    ]
  },
  {
    "id": 3,
    "name": "Merlin Noe",
    "img": guide_3,
    "experience": 4,
    "expertise": ["daily traveller", "public speaker", "has many local friends", "open-minded"],
    "phone": "07447466192",
    "trips": [
      {
        "id": 1,
        "date": `${date.addDays(1).toLocaleDateString("en-GB")}`,
        "name": "Exploring nearby caves",
        "price": 75,
        "departure": "11:00am",
        "return": "3:00pm"
      },
      {
        "id": 2,
        "date": `${date.addDays(4).toLocaleDateString("en-GB")}`,
        "name": "Exploring southern Thimphu",
        "price": 50,
        "departure": "12:00am",
        "return": "5:00pm"
      },
      {
        "id": 3,
        "date": `${date.addDays(5).toLocaleDateString("en-GB")}`,
        "name": "Mountain hiking on northern of Thimphu",
        "price": 100,
        "departure": "9:00am",
        "return": "8:00pm"
      },
      {
        "id": 4,
        "date": `${date.addDays(6).toLocaleDateString("en-GB")}`,
        "name": "Exploring Thimphu center",
        "price": 30,
        "departure": "10:00am",
        "return": "1:00pm"
      }
    ]
  },
  {
    "id": 4,
    "name": "Sarah Casana",
    "img": guide_4,
    "experience": 5,
    "expertise": ["fast walk", "knows spectacular view locations"],
    "phone": "07005433826",
    "trips": [
      {
        "id": 1,
        "date": `${date.addDays(3).toLocaleDateString("en-GB")}`,
        "name": "Exploring southern Thimphu",
        "price": 50,
        "departure": "9:00am",
        "return": "3:00pm"
      },
      {
        "id": 2,
        "date": `${date.addDays(6).toLocaleDateString("en-GB")}`,
        "name": "Exploring southern Thimphu",
        "price": 50,
        "departure": "9:00am",
        "return": "3:00pm"
      }
    ]
  },
  {
    "id": 5,
    "name": "George Bmw",
    "img": guide_5,
    "experience": 3,
    "expertise": ["survival skills", "ruins explorator", "vast knowledge about myths and legends"],
    "phone": "07115432453",
    "trips": [
      {
        "id": 1,
        "date": `${date.addDays(3).toLocaleDateString("en-GB")}`,
        "name": "Hike to Ha",
        "price": 110,
        "departure": "10:00am",
        "return": "8:00pm"
      },
      {
        "id": 2,
        "date": `${date.addDays(4).toLocaleDateString("en-GB")}`,
        "name": "Hike to Paro",
        "price": 75,
        "departure": "10:00am",
        "return": "5:00pm"
      },
      {
        "id": 3,
        "date": `${date.addDays(5).toLocaleDateString("en-GB")}`,
        "name": "Hike to Ha",
        "price": 110,
        "departure": "10:00am",
        "return": "8:00pm"
      }
    ]
  },
  {
    "id": 6,
    "name": "Joe Berlin",
    "img": guide_6,
    "experience": 5,
    "expertise": ["fast walk"],
    "phone": "07221429012",
    "trips": [
      {
        "id": 1,
        "date": `${date.addDays(5).toLocaleDateString("en-GB")}`,
        "name": "Trip to Gasa",
        "price": 250,
        "departure": "6:00am",
        "return": "10:00pm"
      },
      {
        "id": 2,
        "date": `${date.addDays(6).toLocaleDateString("en-GB")}`,
        "name": "Thimphu streets exploration",
        "price": 30,
        "departure": "9:00am",
        "return": "1:00pm"
      }
    ]
  },
  {
    "id": 7,
    "name": "Martha Sosenko",
    "img": guide_7,
    "experience": 4,
    "expertise": ["good city exploration", "interested in local music", "has map in her head"],
    "phone": "07907239812",
    "trips": [
      {
        "id": 1,
        "date": `${date.addDays(1).toLocaleDateString("en-GB")}`,
        "name": "Hike to Ha",
        "price": 235,
        "departure": "7:00am",
        "return": "5:00pm"
      }
    ]
  },
  {
    "id": 8,
    "name": "Marie Gondor",
    "img": guide_8,
    "experience": 5,
    "expertise": ["interested in local music", "very talkative", "storyteller"],
    "phone": "07207173355",
    "trips": [
      {
        "id": 1,
        "date": `${date.addDays(2).toLocaleDateString("en-GB")}`,
        "name": "Visitting Kuruthang",
        "price": 130,
        "departure": "9:00am",
        "return": "4:00pm"
      },
      {
        "id": 2,
        "date": `${date.addDays(4).toLocaleDateString("en-GB")}`,
        "name": "Trip to Gasa",
        "price": 220,
        "departure": "7:00am",
        "return": "10:00pm"
      },
      {
        "id": 3,
        "date": `${date.addDays(5).toLocaleDateString("en-GB")}`,
        "name": "Exploring southern Thimphu",
        "price": 60,
        "departure": "8:00am",
        "return": "4:00pm"
      },
      {
        "id": 4,
        "date": `${date.addDays(7).toLocaleDateString("en-GB")}`,
        "name": "Wandering across Thimphu forests",
        "price": 80,
        "departure": "12:00am",
        "return": "6:00pm"
      },
      {
        "id": 5,
        "date": `${date.addDays(8).toLocaleDateString("en-GB")}`,
        "name": "Visitting Kuruthang",
        "price": 130,
        "departure": "9:00am",
        "return": "4:00pm"
      }
    ]
  }

]

export default guidesData