import React, {useState, useEffect}from 'react'
import VideoContainer from './VideoContainer'
import Button from './Button'


const MainContainer = () => {
    const [videos, setVideos] = useState([]);

  // Function to update videos state
  const updateVideos = (newVideos) => {
    setVideos(newVideos);
  };

  useEffect(() => {
    getVideos();
  }, []);

    // Function to fetch videos
    const getVideos = async () => {
    const apiKey = 'YOUR_API_KEY';
    const apiUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${apiKey}`;
    const data = await fetch(apiUrl);
    const json = await data.json();
    setVideos(json.items);
  };
  return (
    <div className=''>
     <div className='flex flex-wrap'> 
        <Button name="All" updateVideos={updateVideos} />
        <Button name="Gaming"  updateVideos={updateVideos}/>
        <Button name="Live" updateVideos={updateVideos}/>
        <Button name="Cricket" updateVideos={updateVideos}/>
        <Button name="Cooking" updateVideos={updateVideos}/>
        <Button name="Football" updateVideos={updateVideos}/>
        <Button name="MS Dhoni" updateVideos={updateVideos}/>
        <Button name="Valentines" updateVideos={updateVideos}/>
        <Button name="Gods" updateVideos={updateVideos}/>
        <Button name="Dance" updateVideos={updateVideos}/>
        <Button name="Valentines" updateVideos={updateVideos}/>
        <Button name="Gods" updateVideos={updateVideos}/> 
        <Button name="Dance" updateVideos={updateVideos}/>
    </div>
          <VideoContainer videos={videos} updateVideos={updateVideos} />

    </div>
  )
}

export default MainContainer