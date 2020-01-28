import classNames from 'classnames';
import { useAmp } from 'next/amp';

import Banner from './banner';

export default function Header(props) {
  const { zIndex, background, dotBackground, children } = props;
  const isAmp = useAmp();

  return (
    <header>
      <Banner />

      <div
        className={classNames('fixed-container active', {
          'show-logo': dotBackground
        })}
      >
        {children}
      </div>
      <style jsx>
        {`
          header {
            left: 0;
            width: 100%;
            ${isAmp ? '' : 'position: -webkit-sticky;'}
            z-index: ${zIndex || 1000};
          }
          .fixed-container {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            left: 0;
            z-index: ${zIndex || 1000};
            ${
              dotBackground
                ? `
              background-image: radial-gradient(circle, #D7D7D7, #D7D7D7 1px, #FFF 1px, #FFF);
              background-size: 28px 28px;
            `
                : 'background: rgba(255, 255, 255, 0);'
            };
          }
          .active {
            background: ${background || 'rgba(255, 255, 255, 0.98)'};
            pointer-events: auto;
          }
        `}
      </style>
    </header>
  );
}
