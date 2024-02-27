import React, { Fragment, useContext, useState } from "react";
import myContext from "../../context/data/myContext";
// import { BsFillCloudSunFill } from 'react-icons/bs'
// import { FiSun } from 'react-icons/fi'
import { Link } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import "./Navbar.scss";
import logo from "../../assets/logo.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaTrash, FaHome } from "react-icons/fa"; // Import icons from react-icons library
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
function Navbar() {
  const context = useContext(myContext);
  const { searchTitle, setSearchTitle } = context;

  const [open, setOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    toast("logged out");
    localStorage.clear("user");
    window.location.href = "/login";
  };

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <header className="flex h-20 w-full shrink-0 items-center md:px-4 md:px-6 justify-between 	">
        <div className="mr-2 md:mr-6  lg:flex ">
          {/* <ShirtIcon className="h-6 w-6" /> */}
          <img src={logo} className=" h-16" alt="" />
          <span className="sr-only">ShadCN</span>
        </div>
        {/* <img src={logo} alt="" /> */}
        <div className="relative w-80 ">
          {/* filter */}

          {user && (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-500 left-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <Input
                defaultValue={searchTitle}
                type="text"
                id="searchcontent"
                placeholder="Search Title"
                className="pl-10 pr-2 md:pl-12 md:pr-4"
                onChange={(e) => setSearchTitle(e.target.value)}
              />
            </>
          )}
        </div>
        <div className=" flex gap-2 ">
          <Link
            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white md:px-4 md:py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            to="/"
          >
            <span className="hidden md:block">Home</span>
            <FaHome className="ml-1 text-lg" />
          </Link>
          <Link
            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white md:px-4 md:py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            to="/Trash"
          >
            <span className="hidden md:block">Trash</span>
            <FaTrash className="ml-1 text-lg" />
          </Link>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar className="h-8 w-8 md:w-100 md:h-100">
                  <AvatarImage src="https://github.com/codewithharshad.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/login">Sign In</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/signup">Sign Up</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={logout}>Sign Out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {/* {!user ? (
            <div className="">
              <Button className="justify-self-end" variant="outline">
                <Link to="/login">Sign in</Link>
              </Button>
              <Button className="justify-self-end ml-4">
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          ) : (
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar className="h-8 w-8 md:w-100 md:h-100">
                    <AvatarImage src="https://github.com/codewithharshad.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem onClick={logout}>Sign out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )} */}
        </div>
      </header>
    </div>
  );
}

export default Navbar;
