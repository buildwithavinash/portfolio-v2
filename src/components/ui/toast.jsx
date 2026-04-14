const Toast = ({ message, show }) => {
  return (
    <div
      className={`fixed text-nowrap bottom-6 left-1/2 -translate-x-1/2 z-50 
      px-4 py-2 rounded-lg text-sm font-medium 
      bg-slate-900 text-white 
      dark:bg-slate-100 dark:text-black 
      shadow-md transition-all duration-300
      ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
    >
      {message}
    </div>
  );
};

export default Toast;