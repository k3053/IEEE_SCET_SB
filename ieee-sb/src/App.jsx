import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Chapters from "./pages/Chapters";
import ExecomMembers from "./pages/ExecomMembers";
import UpcomingEvents from "./pages/UpcomingEvents";
import SocialMedia from "./pages/SocialMedia";
import MembershipDetails from "./pages/MembershipDetails";
import SocialMediaLink from "./components/SocialMediaLink";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">

        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/chapters" element={<Chapters />} />
            <Route path="/execom" element={<ExecomMembers />} />
            <Route path="/events" element={<UpcomingEvents />} />
            <Route path="/social" element={<SocialMedia />} />
            <Route path="/membership" element={<MembershipDetails />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
