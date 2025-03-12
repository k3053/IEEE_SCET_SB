import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Chapters from "./pages/Chapters";
import ExecomMembers from "./pages/ExecomMembers";
import UpcomingEvents from "./pages/UpcomingEvents";
import SocialMedia from "./pages/SocialMedia";
import MembershipDetails from "./pages/MembershipDetails";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-600 text-white p-4 shadow-md">
          <ul className="flex justify-center space-x-8">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About IEEE SCET SB</Link></li>
            <li><Link to="/chapters">Chapters</Link></li>
            <li><Link to="/execom">Execom Members</Link></li>
            <li><Link to="/events">Upcoming Events</Link></li>
            <li><Link to="/social">Social Media</Link></li>
            <li><Link to="/membership">Membership Details</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/chapters" element={<Chapters />} />
          <Route path="/execom" element={<ExecomMembers />} />
          <Route path="/events" element={<UpcomingEvents />} />
          <Route path="/social" element={<SocialMedia />} />
          <Route path="/membership" element={<MembershipDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
