import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import "./navbar.css";
import { useEffect } from "react";
const NavBar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 100);

    return () => (
      clearInterval(interval)
    )
  }, []);
  return (
    <>
      <nav className="navbar">
        <div className="logo">Movies App</div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/counter">Counter</Link>
        </div>
        <div className="clock-container">
          {currentTime.toLocaleTimeString()}
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
