const FormXtraBtn = ({ onClick, children, emailRef }) => {
  return (
    <p
      onClick={onClick}
      ref={emailRef}
      className="px-3 py-2 text-sm transition-all bg-gray-200 border-t border-b border-r border-white cursor-pointer dark:border-gray-700 opacity-60 hover:opacity-100 dark:bg-gray-900 font-secondary"
    >
      {children}
    </p>
  );
};

export default FormXtraBtn;
