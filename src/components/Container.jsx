export default function Container({ children, className = "" }) {
  return (
    <div
      className={`mx-auto w-full max-w-[1500px] px-4 md:px-12 lg:px-20 xl:px-28 2xl:px-36 ${className}`}
    >
      {children}
    </div>
  );
}