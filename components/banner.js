import Logo from './icons/zeit-white-full-logo';

const text = 'Instantly deploy Next.js sites for free →';
const mobileText = 'Deploy Next.js sites →';

const Banner = () => {
  return (
    <div className="banner">
      <div className="inner">
        <a href="https://zeit.co" target="_blank" rel="noopener noreferrer">
          <Logo />
        </a>

        <a href="https://zeit.co/new/nextjs" target="_blank" rel="noopener noreferrer">
          <p />
        </a>
      </div>

      <style jsx>{`
        .banner {
          background: #000;
          color: #fff;
          width: 100vw;
          height: 50px;
          display: flex;
          align-items: center;
        }

        .inner {
          width: 100%;
          max-width: 1024px;
          margin: 0 auto;
          padding: 0 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        a {
          display: inline-flex;
        }

        p {
          font-weight: 500;
          margin: 0;
          color: #999;
          transition: color 0.15s ease;
        }

        p::before {
          content: "${text}";
        }

        p:hover {
          color: #fff;
        }

        @media (max-width: 640px) {
          p {
            font-size: 14px;
          }

          p::before {
            content: "${mobileText}";
          }
        }
      `}</style>
    </div>
  );
};

export default Banner;
