import Container from "../Container/Container.jsx";
import css from "./Card.module.css";

export default function Card({ meta, id }) {
  const baseUrl = "https://cyberpioneersinc.com/";
  const backgroundImage = baseUrl + meta.image.url;

  console.log("meta:", meta);
  console.log("alt", meta.image.alt);
  const imgAlt = `${meta.image.alt || "Img Name Doesn`t Exist"}`;
  console.log(imgAlt);
  return (
    <Container style="flex justify-left text-left items-center ">
      <div className=" flex-col">
        <div className="grid grid-cols-2 gap-9">
          <div className="flex flex-col gap-2">
            <h2 className="text-white text-4xl">{meta.title}</h2>
            <p className="text-white">{meta.description}</p>
          </div>
          <img
            src={backgroundImage}
            alt={imgAlt}
            className="block w-full h-full"
          />
        </div>
        <a href={`/${id}`} className="w-3 h-3">
          More info
        </a>
      </div>
    </Container>
  );
}
