import css from "./Header.module.scss";

export default function Header() {
  return (
    <header
      className="
   bg-amber-400 p-6 w-full h-full "
    >
      <div className="bg-blue-500 w-full ">
        <div className="mx-auto container ">
          Header
          <h1 className="text-3xl font-bold underline  ">Hello world!</h1>
        </div>
      </div>
    </header>
  );
}
