import React, {useEffect, useState} from 'react';
// import { createBrowserHistory } from 'history';
// const history = createBrowserHistory();

import guidesData from './GuideData';

const GuideDetails = (props) => {
  const [thisGuide, setThisGuide] = useState(null)
  const [loader, setLoader] = useState(false);

  useEffect(() =>{
    try{
      var { guide } = props.location.state
      setThisGuide(guide);
    } catch(err){
      
    }
    
    if(!guide){
      const guideId = props.match.params.name;
      let name = guideId.replace(/-/i, ' ');
      
      guidesData.forEach(guide => {
        guide.name.toLowerCase() === name ? setThisGuide(guide) : setLoader(true);
      });
    
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
