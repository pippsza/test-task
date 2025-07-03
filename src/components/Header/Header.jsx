import css from "./Header.module.scss";
import Container from "../Container/Container.jsx";

import Navigation from "../Navigation/Navigation.jsx";

export default function Header() {
  return (
    <header className=" p-6 w-full  flex justify-center">
      <Container>
        <div className="flex justify-between px-8 rounded-2xl text-center py-3 shadow-xl/50 shadow-black border-solid border">
          <h1>Test-task</h1>
          <Navigation />
        </div>
      </Container>
    </header>
  );
}
