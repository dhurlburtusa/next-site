const Sticky = ({ children }) => {
  return (
    <div>
      {children}

      <style jsx>{`
        div {
          background: #fff;
          position: sticky;
          top: 0;
          z-index: 1000;
        }
      `}</style>
    </div>
  );
};

export default Sticky;
