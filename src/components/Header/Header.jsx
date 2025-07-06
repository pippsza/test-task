import Container from "../Container/Container.jsx";
import Navigation from "../Navigation/Navigation.jsx";
import { useEffect, useState } from "react";

export default function Header() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true);
  }, []);
  return (
    <header
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(-20px)",
        transition: "opacity 0.7s, transform 0.7s",
      }}
      className="w-full flex justify-center bg-gradient-to-r from-blue-400 to-indigo-600 shadow-md sticky top-0 z-50"
    >
      <Container>
        <div className="flex flex-col sm:flex-row justify-between items-center py-4 max-w-7xl mx-auto transition-all duration-500">
          <p
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(-10px)",
              transition: "opacity 0.9s 0.2s, transform 0.9s 0.2s",
            }}
            className="text-white font-bold text-lg sm:text-xl tracking-widest select-none mb-2 sm:mb-0"
          >
            TEST-TASK
          </p>
          <Navigation />
        </div>
      </Container>
    </header>
  );
}
