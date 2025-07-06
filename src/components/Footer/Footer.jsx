import Container from "../Container/Container.jsx";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center bg-gray-900 border-t border-gray-700 shadow-sm z-40 ">
      <Container>
        <div className="flex justify-center items-center py-4 max-w-7xl mx-auto">
          <p className="text-gray-400 text-sm select-none">TEST-TASK</p>
        </div>
      </Container>
    </footer>
  );
}
