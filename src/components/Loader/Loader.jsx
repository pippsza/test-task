import css from "./Loader.module.scss";

export default function Loader() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className={css.loader}></div>
    </div>
  );
}
