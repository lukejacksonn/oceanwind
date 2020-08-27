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
    clearfix
  `,
  card: ow`
    bg-white
    max-w-sm
    rounded-2xl
    overflow-hidden
    shadow-2xl
    border-current
    border-16
    border-solid`,
  tag: ow`
    inline-block
    bg-grey-300
    hover:bg-gray-100
    hover:text-gray-800
    hover:border-gray-500
    hover:shadow-lg
    border-1
    border-solid
    border-gray-400
    rounded-full
    px-2
    py-1
    text-sm
    text-gray-600
    font-semibold
    cursor-pointer`,
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
        <div className=${ow`px-6 py-6 space-y-6`}>
          <div className=${ow`font-bold`}>
            <h1 className=${ow`cap-24-20`}>
              The Coldest Sunset In The World
            </h1>
          </div>
          <div>
            <p className=${ow`text-gray-700 cap-12-12`}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <form className=${ow`flex flex-row space-x-4`}>
            <input
              className=${ow`w-full py-3 px-4 bg-gray-100 border-1 border-grey-600 rounded sm:focus:bg-gray-100 sm:focus:placeholder-current`}
              placeholder="Enter a value"
            />
            <button className=${ow`px-6 rounded bg-current font-bold`}>
              <span className=${ow`text-white`}>SEND</span>
            </button>
          </form>
        </div>
        <div
          className=${ow`px-6 py-4 bg-gray-100 border-t-1 border-gray-300 border-solid space-x-2`}
        >
          <div className=${style.tag}>
            <span>#photography</span>
          </div>
          <div className=${style.tag}>
            <span>#travel</span>
          </div>
          <div className=${style.tag}>
            <span>#winter</span>
          </div>
        </div>
      </div>
    </main>
  `,
  document.body
);

const reset = document.createElement('link');
reset.rel = 'stylesheet';
reset.href = 'https://unpkg.com/tailwindcss@1.7.5/dist/base.min.css';

document.head.appendChild(reset);
