import { useEffect, useState } from "react";
import Container from "../Container/Container.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import RenderPage from "../RenderPage/RenderPage.jsx";
// import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { fetchAll } from "../../redux/cases/operations.js";
import { selectCases, selectLoading } from "../../redux/cases/selectors.js";
import Card from "../Card/Card.jsx";
import Loader from "../Loader/Loader.jsx";

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
  console.log("isLoading", isLoading);
  // useEffect(() => {
  //   console.log("data:", data);
  // }, [data]);

  return (
    <>
      {/* <RenderPage id="66e94124c2c7bc6026e930f7" /> */}
      {/* <SearchBar /> */}
      {isLoading ? (
        <Loader />
      ) : (
        data &&
        data.map((el) => (
          <section
            className={`text-center w-full mt-10 mb-10 flex justify-center content-center`}
            style={{ height: el.meta.image.height }}
            key={el.id}
          >
            <Card meta={el.meta} id={el.id} />
          </section>
        ))
      )}
    </>
  );
}
