// import React, { useEffect, useState } from 'react'
// import {YOUTUDE_VIDEOS_API, GOOGLE_API_KEY} from"../utils/constants";
// import VideoCard, {AddVedioCard} from './VideoCard';
// import { Link } from 'react-router-dom';
// import useOnlineStatus from '../utils/useOnlineStatus';

// const VideoContainer = () => {
// const[videos,setvideos]=useState([]);


// useEffect(()=>{
//   getVideos();
// },[])

// // 
// const  getVideos=async()=>{
//   const apiKey = 'AIzaSyBOrW85_qzdWsL0y_3Lw1itCdiirgIgovA'
//   const apiUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${apiKey}`;
//   const data=await fetch(apiUrl);
//   const json=await data.json();
//  // console.log(json);
//   setvideos(json.items);
// }
 
// const onlineStatus  =useOnlineStatus();

// if(onlineStatus===false)
// return(
//     <h1> Looks like you are Offline
//           </h1>
// )

//   return (
//     <div className='flex flex-wrap'>

//     {videos?.map((video)=>(
//    <Link key={video.id} to={"/watch?v="+video.id} >
//      <VideoCard  info={video}/>
//      </Link>
//    ))}
      

//     </div>
//   );
// };

// export default VideoContainer;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import VideoCard from './VideoCard';
import useOnlineStatus from '../utils/useOnlineStatus';

const VideoContainer = ({ videos, updateVideos }) => {
  const [isLoading, setIsLoading] = useState(true);
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    if (videos.length === 0) {
      // Call getVideos initially if videos are not already loaded
      getVideos();
    } else {
      setIsLoading(false);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Function to fetch videos
  const getVideos = async () => {
    const apiKey = 'AIzaSyBOrW85_qzdWsL0y_3Lw1itCdiirgIgovA';
    const apiUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${apiKey}`;
    const data = await fetch(apiUrl);
    const json = await data.json();
    updateVideos(json.items);
    setIsLoading(false);
  };

  if (!onlineStatus) {
    return <h1>Looks like you are offline</h1>;
  }

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className='flex flex-wrap'>
          {videos.map((video) => (
            <Link key={video.id} to={"/watch?v=" + video.id}>
              <VideoCard info={video} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoContainer;
