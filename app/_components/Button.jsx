export default function Button({ children, type }) {
  return (
    <button
      type={type}
      className={` bg-accent-500 items-center text-neutrual-950 border-accent-400 rounded-full xl:text-xl xl:h-12 whitespace-nowrap h-10 px-6 font-medium max-md:h-9`}
    >
      {children}
    </button>
  );
}
