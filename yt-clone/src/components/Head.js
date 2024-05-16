import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { cacheResults } from "../utils/searchSlice";
import logo from '../assets/youtube-logo-icon.webp';
import searchIcon from '../assets/search.png';

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    // Make an api call after every key press
    // But if the difference between 2 api calls is < 200ms, decline the api calls
    const timer = setTimeout(() => {
      if (searchQuery && searchCache && searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery, searchCache]); // Include searchCache in the dependency array

  const getSearchSuggestions = async () => {
    try {
      const response = await fetch(`https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchQuery}`, {mode: 'no-cors',});
      console.log('response' , response);

      const data = await response.json();
      console.log('data' , data[1]);

      setSuggestions(data[1]);

      dispatch(cacheResults({
        [searchQuery]: data[1]
      }));
    } catch (error) {
      console.error("Error fetching search suggestions:", error);
    }
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-4   relative">
      <div className="flex items-center">
        <img
          onClick={toggleMenuHandler}
          className="h-9 mr-3 cursor-pointer"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/non_2x/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
          alt="Menu"
        />
        <a href="/">
          <img className="h-6" src={logo} alt="YouTube Logo" />
        </a>
      </div>

      <div className="col-span-10 px-10">
        <div className="flex items-center content-center">
          <input
            className="w-1/2 border border-gray-400 p-2 rounded-l-full px-4"
            type="text"
            value={searchQuery}
            onChange={(e) => { 
              setSearchQuery(e.target.value)
              console.log("Search query updated:", e.target.value);
            }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            placeholder="Search"
          />

          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100"><img className="w-6" src={searchIcon}></img></button>
        </div>
        {showSuggestions && (
          <div className="fixed m-auto bg-white py-1 px-2 w-[44rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((suggestion) => (
                <li key={suggestion} className="py-2 shadow-sm">
                  <img className="w-6" src={searchIcon}></img>
                  {suggestion}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img className="h-10 rounded-r-full" src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg" alt="User" />
      </div>
    </div>
  );
};

export default Head;
