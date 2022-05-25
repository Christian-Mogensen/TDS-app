const Wrapper = ({ children }) => {
  return (
    <div className="min-h-screen overflow-hidden mainstyling bg-gradient-to-r from-gray-100 to-beige-50 dark:from-gray-900 dark:to-transparent">
      {children}
    </div>
  );
};

export default Wrapper;
