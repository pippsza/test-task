import css from "./App.module.css";
import Layout from "../components/Layout/Layout.jsx";
import { Suspense, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import CardsContainer from "./CardsContainer/CardsContainer.jsx";
export default function App() {
  useEffect(() => {
    // dispatch(session());
  });
  return (
    <>
      <Toaster
        toastOptions={{
          duration: 3000,
          style: {
            background: "white",
            color: "black",
            border: "black solid 2px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
          },
        }}
      />
      <div className={css.mainApp}>
        <Suspense fallback={<span className={css.loader}></span>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<CardsContainer></CardsContainer>} />
              <Route path="*" element={null} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </>
  );
}
