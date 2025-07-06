import { convertLexicalToHTML } from "@payloadcms/richtext-lexical/html";
import css from "./RenderPage.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "../Loader/Loader.jsx";
import { useParams } from "react-router-dom";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage.jsx";
import { useDispatch } from "react-redux";
import { setId } from "../../redux/recent/slice.js";
import Container from "../Container/Container.jsx";
const baseUrl = "https://cyberpioneersinc.com/";

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
      return (
        <section>
          {block.content?.map((child) => (
            <RenderBlock key={child.id} {...child} />
          ))}
        </section>
      );

    case "case-columns":
      return (
        <div className="grid grid-cols-2 gap-10">
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
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(false);
      try {
        const res = await axios.get(`${baseUrl}api/cases/${id}`);
        if (!res.data || Object.keys(res.data).length === 0) {
          setError(true);
        } else {
          setData(res.data);
        }
      } catch (err) {
        setError(true);
        toast.error("Помилка завантаження данних.");
        throw new Error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    dispatch(setId(id));
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <NotFoundPage />;

  return data ? (
    <Container>
      <h1
        className="font-bold block text-4xl mt-24
      mb-15"
      >
        {data.title}
      </h1>
      <div className="grid grid-cols-2 gap-28">
        <div className="flex flex-col gap-3.5">
          <p>{data.description}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-bold text-lg">Categories</p>
          <ul className="list-disc marker:text-2xl marker:text-blue-500">
            {data.category.map((categoryEl) => (
              <li key={categoryEl.id}>{categoryEl.title} </li>
            ))}
          </ul>
        </div>
      </div>

      {data.layout.map((block) => (
        <RenderBlock key={block.id} {...block} />
      ))}
    </Container>
  ) : (
    <Loader />
  );
}
