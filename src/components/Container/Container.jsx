export default function Container({ children, style = "" }) {
  return (
    <div
      className={`w-full h-full max-w-2xs sm:max-w-2xl lg:max-w-4xl  ${style}`}
    >
      {children}
    </div>
  );
}
