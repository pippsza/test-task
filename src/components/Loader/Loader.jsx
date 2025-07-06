import css from "./Loader.module.scss";

export default function Loader() {
  return (
    <div className="w-full h-full flex justify-center items-center min-h-[120px]">
      <div className={css.loader}></div>
    </div>
  );
}
