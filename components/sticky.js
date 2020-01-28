const Sticky = ({ offset, children }) => {
  return (
    <div style={{ top: offset || 0 }}>
      {children}

      <style jsx>{`
        div {
          background: #fff;
          position: sticky;
          z-index: 1000;
        }
      `}</style>
    </div>
  );
};

export default Sticky;
