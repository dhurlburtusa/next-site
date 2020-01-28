import Banner from './banner';

export default function Header(props) {
  const { children } = props;

  return (
    <>
      <Banner />
      <header>{children}</header>

      <style jsx>{`
        header {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          width: 100%;
          background: #fff;
          z-index: 1000;
          border-bottom: 1px solid #eaeaea;
        }
      `}</style>
    </>
  );
}
