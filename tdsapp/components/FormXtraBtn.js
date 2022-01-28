

const FormXtraBtn = ({ onClick, children, emailRef }) => {


  return (
    <p onClick={onClick} ref={emailRef}
      className="cursor-pointer py-2 px-3 text-sm border-b text-center border-r border-t border-white dark:border-gray-700 bg-gray-200 opacity-60 hover:opacity-100 dark:bg-gray-900 font-secondary transition-all"
      
    >
      {children}
    </p>
  );
};

export default FormXtraBtn;
