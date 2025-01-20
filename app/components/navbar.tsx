"use client";
import React from "react";

const NavBar: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <nav className="fixed top-0 w-full bg-transparent shadow-md z-50">
        <ul className="flex justify-center gap-6 p-4">
          <li>
            <button onClick={() => scrollToSection("home")}>Home</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("history")}>
              Our History
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("rooms")}>Rooms</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("events")}>Events</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
