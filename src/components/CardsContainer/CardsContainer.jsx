import { useEffect, useState } from "react";
import CardsList from "../CardsList/CardsList.jsx";
import Container from "../Container/Container.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import css from "./CardsContainer.module.scss";
import axios from "axios";
import { InnerHtml } from "../InnerHtml/InnerHtml.jsx";

export default function CardsContainer() {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://cyberpioneersinc.com/api/cases?limit=1`
        );
        // console.log(res.data);
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    if (data) {
      console.log(data.docs[0].layout);
    }
  }, [data]);

  return (
    <Container>
      {data && <InnerHtml data={data.docs[0].layout} />}
      {/* <SearchBar /> */}
      {/* <CardsList /> */}
    </Container>
  );
}
