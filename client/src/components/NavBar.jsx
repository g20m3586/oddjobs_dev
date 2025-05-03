import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-green-600 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="text-2xl font-bold tracking-wide">
          <Link to="/">ODDJobs</Link>
        </div>

        {/* Navigation Links */}
        <div className="space-x-4 text-sm sm:text-base">
          <Link to="/" className="hover:bg-green-700 px-3 py-2 rounded transition">Home</Link>
          <Link to="/oddjobs" className="hover:bg-green-700 px-3 py-2 rounded transition">OddJobs</Link>
          <Link to="/businesses" className="hover:bg-green-700 px-3 py-2 rounded transition">Businesses</Link>
          <Link to="/items" className="hover:bg-green-700 px-3 py-2 rounded transition">Items</Link>
          <Link to="/myjobs" className="hover:bg-green-700 px-3 py-2 rounded transition">MyJobs</Link>
        </div>

        {/* Auth Buttons (will later link to actual Sign In/Sign Up routes) */}
        <div className="space-x-2 hidden sm:block">
          <Link to="/login" className="bg-white text-green-600 px-3 py-1 rounded font-medium hover:bg-gray-100">Sign In</Link>
          <Link to="/signup" className="bg-yellow-400 text-black px-3 py-1 rounded font-medium hover:bg-yellow-300">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
}
