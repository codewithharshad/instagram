import React from 'react';
import '../../src/App.css';

const Button = ({ name, updateVideos }) => {
  const handleButtonClick = async () => {
    try {
      const API_KEY = 'AIzaSyCEf-R_yiSCyN4kxm5KDnfnwk9aDtG7zdE';
      const query = name;

      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${query}&part=snippet&type=video`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch search results');
      }

      const data = await response.json();
      console.log('Search results:', data);

      // Update videos in parent component
      updateVideos(data.items);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div>
      <button
        className='px-4 py-2 m-2 mx-2 bg-gray-100 rounded-lg w-auto   whitespace-nowrap'
        onClick={handleButtonClick}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
