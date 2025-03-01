import React, { useState, useEffect } from "react";
import Sidebar from "./Components/Sidefullnavbar";
import Home from "./Components/Home";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Extra from "./Components/Extra";
import Certifications from "./Components/Certifications";
import ContactUs from "./Components/ContactUs";
import Popup from "./Components/Popup"; // Import the Popup component
import { IoMenu, IoClose } from "react-icons/io5"; // Icons for menu toggle
import confetti from "canvas-confetti";
import logo from "./Assets/logops.png"; // Import logo

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Show the loading screen for 5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    // Delay for button animation
    const buttonTimer = setTimeout(() => {
      setIsButtonVisible(true);
    }, 5500);

    return () => {
      clearTimeout(timer);
      clearTimeout(buttonTimer);
    };
  }, []);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);

    // Trigger confetti effect
    confetti({
      particleCount: 150,
      spread: 200,
      origin: { y: 0.6 },
      colors: ["#FFD700", "#FF4500", "#FFFFE0"],
    });
  };

  return (
    <div className="flex">
      {/* Show loading screen */}
      {isLoading ? (
        <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
          <img
            src={logo}
            alt="Loading..."
            className="w-72 h-72 md:w-96 md:h-96 opacity-0 animate-fadeIn"
          />
        </div>
      ) : (
        <>
          {/* Mobile Sidebar Button */}
          <button
            className="md:hidden fixed top-4 left-4 bg-yellow-500 text-black p-3 rounded-full shadow-lg transition-all hover:bg-yellow-600 focus:outline-none z-50"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
          </button>

          {/* Sidebar (Hidden on Mobile, Animated) */}
          <div
            className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-40 ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0 md:block`}
          >
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className={`w-full md:ml-64 min-h-screen bg-gray-100`}>
            <Home />
            <Education />
            <Skills />
            <Projects />
            <Extra />
            <Certifications />
            <ContactUs />

            {/* Animated Floating Button */}
            {isButtonVisible && (
              <button
                onClick={togglePopup}
                className="fixed bottom-5 right-5 bg-yellow-500 text-black py-3 px-6 rounded-full shadow-lg hover:bg-yellow-600 transition-all transform hover:scale-105 focus:outline-none"
              >
                ☕ Buy Me a Coffee
              </button>
            )}

            {/* Popup Component */}
            {isPopupVisible && <Popup togglePopup={togglePopup} />}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
