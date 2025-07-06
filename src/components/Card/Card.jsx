import Container from "../Container/Container.jsx";
import css from "./Card.module.css";

export default function Card({ meta, id }) {
  const baseUrl = "https://cyberpioneersinc.com/";
  const backgroundImage = baseUrl + meta.image.url;
  const imgAlt = `${meta.image.alt || "Img Name Doesn`t Exist"}`;
  return (
    <Container style="flex justify-left text-left items-center ">
      <div className=" flex-col">
        <div className="grid grid-cols-2 gap-9">
          <div className="flex flex-col gap-2">
            <h2 className="text-white text-4xl">{meta.title}</h2>
            <p className="text-white">{meta.description}</p>
            <a
              href={`/${id}`}
              className="flex justify-center items-center  w-40 h-10 bg-white border-transparent hover:border-2 hover:bg-blue-400 rounded-sm transition-colors duration-800 focus:border-none hover:scale-95"
            >
              More info
            </a>
          </div>
          <img
            src={backgroundImage}
            alt={imgAlt}
            className="block w-full h-full"
          />
        </div>
      </div>
    </Container>
  );
}
