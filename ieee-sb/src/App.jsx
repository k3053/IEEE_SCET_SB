import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Chapters from "./pages/Chapters";
import ExecomMembers from "./pages/ExecomMembers";
import UpcomingEvents from "./pages/UpcomingEvents";
import EventDetails from "./components/EventDetails";   // ✅ MISSING IMPORT (FIXED)
import SocialMedia from "./pages/SocialMedia";
import MembershipDetails from "./pages/MembershipDetails";

import Cs from "./Chapters/Cs";
import Wie from "./Chapters/Wie";   // ⚠ Make sure file name matches exactly
import VTS from "./Chapters/Vts";   // ⚠ Match casing with file name
import Sps from "./Chapters/Sps";
import Sight from "./Chapters/Sight";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        
        <Header />

        <main className="flex-grow">
          <Routes>

            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/execom" element={<ExecomMembers />} />
            <Route path="/events" element={<UpcomingEvents />} />
            <Route path="/event/:id" element={<EventDetails />} />
            <Route path="/social" element={<SocialMedia />} />
            <Route path="/membership" element={<MembershipDetails />} />

            {/* Chapters */}
            <Route path="/chapters" element={<Chapters />} />
            <Route path="/chapters/cs" element={<Cs />} />
            <Route path="/chapters/wie" element={<Wie />} />
            <Route path="/chapters/vts" element={<VTS />} />
            <Route path="/chapters/sps" element={<Sps />} />
            <Route path="/chapters/sight" element={<Sight />} />

            {/* 404 Page */}
            <Route
              path="*"
              element={
                <h1 className="text-center mt-20 text-3xl font-semibold">
                  404 - Page Not Found
                </h1>
              }
            />

          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
