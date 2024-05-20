import React, { useState, useEffect } from 'react';
import badge from '../assets/youtube-verified.png';

const VideoCard = ({ info }) => {
  // Check if info is defined, if not, set it to an empty object
  info = info || {};
  const { snippet, statistics } = info;
  const { channelId, channelTitle, title, thumbnails, publishedAt } = snippet || {};
  const [logoUrl, setLogoUrl] = useState('');

  useEffect(() => {
  const apiKey = 'YOUR_API_KEY'
    const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${apiKey}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const channel = data.items[0];
        const logoUrl = channel.snippet.thumbnails.high.url;
        setLogoUrl(logoUrl);
        
      })
      .catch(error => console.error('Error fetching channel data:', error));
  }, [channelId]);
   const truncateTitle = (title) => {
    const maxLength = 50; // Maximum length allowed for the title
    if (title.length > maxLength) {
      return title.slice(0, maxLength) + '...';
    } else {
      return title;
    }
  };

  // Function to format published time to a human-readable format
  const formatPublishedTime = (publishedAt) => {
    const now = new Date();
    const publishedTime = new Date(publishedAt);
    const timeDiff = now - publishedTime;

    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
      return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
    }
  };

  // Function to format view count
  const formatViewCount = (viewCount) => {
    if (viewCount < 1000) {
      return viewCount;
    } else if (viewCount < 1000000) {
      return (viewCount / 1000).toFixed(1) + 'K';
    } else {
      return (viewCount / 1000000).toFixed(1) + 'M';
    }
  };

  return (
    <div className='p-2 m-2 w-72 '>
      <img className='rounded-lg' alt="thumbnail" src={thumbnails?.medium?.url} />

      <ul>
        <li className='font-bold pt-2  flex items-center content-center text-sm' >
          <img src={logoUrl} alt="channel logo"  className='border border-red w-10 rounded-full mr-2'/> 
          {truncateTitle(title)}
        </li>
        <li style={{ color: '#606060' }} className=' font-medium flex items-center content-center  ml-12'>{truncateTitle(channelTitle)}
          <img className='w-7 ml-0' src={badge} alt="verified badge" />
        </li>
        <li style={{ color: '#606060' }} className='text-sm  ml-12'>{formatViewCount(statistics?.viewCount)} views • {formatPublishedTime(publishedAt)}
        </li>
        <li></li>
      </ul>
    </div>
  )
}

export default VideoCard;
