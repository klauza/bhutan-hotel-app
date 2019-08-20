import React, {useEffect, useState} from 'react';
// import { createBrowserHistory } from 'history';
// const history = createBrowserHistory();

import guidesData from './GuideData';

const GuideDetails = (props) => {
  const [thisGuide, setThisGuide] = useState(null)
  // const [loader, setLoader] = useState(false);

  useEffect(() =>{
    try{
      var { guide } = props.location.state
      setThisGuide(guide);
    } catch(err){
      
    }
    
    if(!guide){
      // if page entered from outer source, get guide from url as text and find him in local array
      const guideId = props.match.params.name;
      let name = guideId.replace(/-/i, ' ');
      
      guidesData.find(guide => guide.name.toLowerCase() === name && setThisGuide(guide));
    }

  });
  if(thisGuide){
  return (
    <div>
      Your chosen guide: {thisGuide.name}
    </div>
  )
  } else {
    return (<div>Loading...</div>)
  }
}

export default GuideDetails
