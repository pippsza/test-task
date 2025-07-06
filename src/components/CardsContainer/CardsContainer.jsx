import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAll } from "../../redux/cases/operations.js";
import { selectCases, selectLoading } from "../../redux/cases/selectors.js";
import Card from "../Card/Card.jsx";
import Loader from "../Loader/Loader.jsx";
const baseUrl = "https://cyberpioneersinc.com";
export default function CardsContainer() {
  const items = useSelector(selectCases);

  const [data, setData] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  useEffect(() => {
    setData(items.docs);
  }, [items]);
  const isLoading = useSelector(selectLoading);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        data &&
        data.map((el) => {
          return (
            <section
              className={`relative text-center w-full mb-4 last:mb-0 lex bg-cover justify-center content-center
              before:absolute before:inset-0 before:content-[''] before:pointer-events-none
              before:z-0 before:from-black/100 before:to-black/10 before:bg-gradient-to-br
              h-80 z-0`}
              style={{
                height: el.meta.image.height,
                backgroundImage: `url(${baseUrl}${el.backgroundImage.url})`,
              }}
              key={el.id}
            >
              <div className="relative z-10 w-full h-full flex justify-center items-center">
                <Card meta={el.meta} id={el.id} />
              </div>
            </section>
          );
        })
      )}
    </>
  );
}
