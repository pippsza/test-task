import Container from "../Container/Container.jsx";
import { useEffect, useState } from "react";

export default function Card({ meta, id }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true);
  }, []);
  const baseUrl = "https://cyberpioneersinc.com/";
  const backgroundImage = baseUrl + meta.image.url;
  const imgAlt = `${meta.image.alt || "Img Name Doesn't Exist"}`;
  return (
    <Container style="flex justify-left text-left items-center ">
      <div
        className="flex flex-col w-full"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(30px)",
          transition: "opacity 0.7s, transform 0.7s",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-9 items-center">
          <div className="flex flex-col gap-2 order-2 md:order-1 text-center md:text-left">
            <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
              {meta.title}
            </h2>
            <p className="text-white text-base sm:text-lg mb-4">
              {meta.description}
            </p>
            <a
              href={`/${id}`}
              className="flex  justify-center items-center w-full sm:w-40 h-10 bg-white border-transparent hover:border-2 hover:bg-blue-400 rounded-sm transition-all duration-300 focus:border-none hover:scale-95 font-semibold text-blue-700 "
            >
              More info
            </a>
          </div>
          <img
            src={backgroundImage}
            alt={imgAlt}
            className="block w-full h-40 sm:h-56 md:h-64 object-cover rounded-lg shadow-lg order-1 md:order-2"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "scale(1)" : "scale(0.95)",
              transition: "opacity 0.7s 0.2s, transform 0.7s 0.2s",
            }}
          />
        </div>
      </div>
    </Container>
  );
}
