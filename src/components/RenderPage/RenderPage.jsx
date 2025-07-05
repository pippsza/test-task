import { convertLexicalToHTML } from "@payloadcms/richtext-lexical/html";
import css from "./RenderPage.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "../Loader/Loader.jsx";
import { useParams } from "react-router-dom";
const baseUrl = "https://cyberpioneersinc.com/";
// ПО META БУДУ РЕНДЕРИТЬ КАРТОЧКИ НА ГЛАВНОЙ СТРАНИЦЕ!!!!
const InnerLexicalText = ({ data }) => {
  if (!data) return null;
  const html = convertLexicalToHTML({ data });
  return (
    <div
      className={css.caseRichtext}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

const RenderBlock = (block) => {
  switch (block.blockType) {
    case "case-section":
      console.log(block.content);
      return (
        <section>
          {block.content?.map((child) => (
            <RenderBlock key={child.id} {...child} />
          ))}
        </section>
      );

    case "case-columns":
      return (
        <div className="grid grid-cols-2">
          <div>
            {block.left?.map((child) => (
              <RenderBlock key={child.id} {...child} />
            ))}
          </div>
          <div style={{ flex: 1 }}>
            {block.right?.map((child) => (
              <RenderBlock key={child.id} {...child} />
            ))}
          </div>
        </div>
      );

    case "case-text":
      return <InnerLexicalText data={block.text} />;

    case "case-goals":
      return (
        <div>
          {block.content?.map((child) => (
            <RenderBlock key={child.id} {...child} />
          ))}
        </div>
      );
    case "case-image":
      const img = block.image;
      if (!img) return null;
      return (
        <img
          src={img.url ? `${baseUrl}${img.url}` : ""}
          alt={img.filename || ""}
          width={img.width}
          height={img.height}
          className="w-full block mt-6 mb-6 rounded-lg"
        />
      );

    default:
      return null;
  }
};

export default function RenderPage() {
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(`${baseUrl}api/cases/${id}`);
        const res = await axios.get(`${baseUrl}api/cases/${id}`);
        setData(res.data);
      } catch (err) {
        console.log(err);
        toast.error(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    // console.log(data);
  }, [data]);
  // const backgroundImage = data.backgroundImage.url;
  const backgroundImage = null;
  // console.log(baseUrl + backgroundImage);
  return data ? (
    <div
      className="flex flex-col pt-8"
      // style={{ backgroundImage: `url(${baseUrl + backgroundImage})` }}
    >
      <div className="grid grid-cols-2 gap-28">
        <div className="flex flex-col gap-3.5">
          <h1 className="font-bold text-4xl">{data.title}</h1>
          <p>{data.description}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-bold text-lg">Categories</p>
          <ul className="list-disc marker:text-2xl marker:text-blue-500 pl-1.5">
            {data.category.map((categoryEl) => (
              <li key={categoryEl.id}>{categoryEl.title} </li>
            ))}
          </ul>
        </div>
      </div>

      {data.layout.map((block) => (
        <RenderBlock key={block.id} {...block} />
      ))}
    </div>
  ) : (
    <Loader />
  );
}
