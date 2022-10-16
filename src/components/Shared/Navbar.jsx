import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { IoEaselOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { watchlist } = useSelector((state) => state.watchlist);

  return (
    <div className="h-16 flex justify-between items-center px-4 md:px-10 bg-white shadow-md sticky top-0 z-50">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="" className="h-14 w-14" />{" "}
        <p className="text-lg font-bold">
          Movie<span className="text-blue-700">Zone</span>
        </p>
      </Link>

      <Link
        to="/watchlist"
        className="text-sm font-semibold flex items-center gap-2"
      >
        <IoEaselOutline className="text-blue-700" />
        Watchlist ({watchlist?.length})
      </Link>
    </div>
  );
};

export default Navbar;
