import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

const Sidebar = () => {

const isMenuOpen=useSelector( store=>store.app.isMenuOpen);
//Early return


  return (!isMenuOpen)?null:(
    // <div className="  bg-white " style={{width: '150px'}}>
    <div className="  bg-white " style={{width: '150px'}}>
  <ul className="">
    <li className="py-2 pl-4 hover:bg-gray-100 hover:rounded-lg">
      <Link to="/" className="text-gray-700 hover:text-blac">Home</Link>
    </li>
    <li className="py-2 pl-4 hover:bg-gray-100 hover:rounded-lg">Shorts</li>
    <li className="py-2 pl-4 hover:bg-gray-100 hover:rounded-lg">Videos</li>
    <li className="py-2 pl-4 hover:bg-gray-100 hover:rounded-lg">Movies</li>
    <li className="py-2 pl-4 hover:bg-gray-100 hover:rounded-lg">Live</li>
  </ul>
    <div className=" border-gray-200 border-b"></div>
  <h1 className=" pl-4 font-bold pt-5 text-gray-700">Subscriptions</h1>
  <ul className="">
    <li className="py-2 pl-4 hover:bg-gray-100 hover:rounded-lg">Music</li>
    <li className="py-2 pl-4 hover:bg-gray-100 hover:rounded-lg">Sport</li>
    <li className="py-2 pl-4 hover:bg-gray-100 hover:rounded-lg">Gaming</li>
    <li className="py-2 pl-4 hover:bg-gray-100 hover:rounded-lg">Movies</li>
  </ul>
      <div className=" border-gray-200 border-b"></div>

  <h1 className=" pl-4 font-bold pt-5 text-gray-700">Watch Later</h1>
  <ul className="">
    <li className="py-2 pl-4 hover:bg-gray-100 hover:rounded-lg">Music</li>
    <li className="py-2 pl-4 hover:bg-gray-100 hover:rounded-lg">Sport</li>
    <li className="py-2 pl-4 hover:bg-gray-100 hover:rounded-lg">Gaming</li>
    <li className="py-2 pl-4 hover:bg-gray-100 hover:rounded-lg">Movies</li>
  </ul>
</div>
  )
}

export default Sidebar