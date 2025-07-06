import Container from "../Container/Container.jsx";
import Navigation from "../Navigation/Navigation.jsx";
import css from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center bg-gradient-to-r from-blue-400 to-indigo-600 shadow-md sticky top-0 z-50">
      <Container>
        <div className="flex justify-between items-center py-4  max-w-7xl mx-auto">
          <p className="text-white font-bold text-xl tracking-widest select-none">
            TEST-TASK
          </p>
          <Navigation />
        </div>
      </Container>
    </footer>
  );
}
