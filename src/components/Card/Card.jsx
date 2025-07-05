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
    <Container style="">
      <div>
        <h2 className="">{meta.title}</h2>
        <p>{meta.description}</p>
      </div>
      <img src={backgroundImage} alt={imgAlt} className="block w-16 h-16" />
      <a href={`/${id}`} className="w-3 h-3">
        More info
      </a>
    </Container>
  );
}
