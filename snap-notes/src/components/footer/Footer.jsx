import React, { useContext } from "react";
import myContext from "../../context/data/myContext";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa"; // Import icons from react-icons library
import HoverSocial from "./HoverSocial";
import H5Share from "./H5Share";
function Footer() {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <div>
      <div className="hidden md:block fixed bottom-10 right-5">
        <HoverSocial />
      </div>
      <div className="block md:hidden fixed bottom-10 right-5">
        <H5Share />
      </div>
    </div>
  );
}

export default Footer;
