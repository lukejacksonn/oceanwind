import { render, h } from 'https://unpkg.com/preact?module';
import htm from 'https://unpkg.com/htm?module';

import ow from './index.js';

const html = htm.bind(h);

const style = {
  main: ow`
    text-green-500
    sm:text-red-500
    md:text-purple-800
    bg-current
    font-sans
    w-full
    h-screen
    flex
    items-center
    justify-center
  `,
  card: ow`
    bg-white
    max-w-sm
    rounded-xl
    overflow-hidden
    shadow-xl
    border-current
    border-8
    border-solid`,
  tag: ow`inline-block bg-purple-300 hover:bg-purple-200 border-1 border-solid border-purple-400 hover:border-purple-300 rounded-full px-2 py-1 text-sm font-semibold text-purple-700 mr-2 cursor-pointer`,
};

render(
  html`
    <main className=${style.main}>
      <div className=${style.card}>
        <img
          className=${ow`w-full`}
          src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
          alt="Sunset in the mountains"
        />
        <div className=${ow`px-8 py-6`}>
          <div className=${ow`font-bold text-2xl mb-4`}>The Coldest Sunset</div>
          <p className=${ow`text-gray-700 text-base leading-6`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div
          className=${ow`px-6 py-4 bg-purple-200 border-t-2 border-gray-300 border-solid`}
        >
          <span className=${style.tag}>#photography</span>
          <span className=${style.tag}>#travel</span>
          <span className=${style.tag}>#winter</span>
        </div>
      </div>
    </main>
  `,
  document.body
);

const styleSheet = document.createElement('style');

styleSheet.innerText = `
  * { box-sizing: border-box; margin: 0; padding: 0; border: 0; }
  img { width: 100%; height: auto; }
  h1,h2,h3,h4,h5,h6 {
    font-size: inherit;
    font-weight: inherit;
  }
`;

document.head.appendChild(styleSheet);
