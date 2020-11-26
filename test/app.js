import {
  render,
  h,
} from 'https://unpkg.com/preact@10.5.4/dist/preact.module.js?module';
import htm from 'https://unpkg.com/htm@3.0.4/dist/htm.module.js?module';

import _ow, { themed } from '../index.js';

const html = htm.bind(h);

const ow = themed({
  colors: {
    purple: {
      800: 'hotpink',
    },
  },
  borderRadius: {
    '2xl': '2rem',
  },
  borderWidth: {
    16: '1rem',
  },
});

const style = {
  main: ow`
    ${true ? 'text-green-500' : ''}
    bg-current
    font-sans
    w-full
    h-screen
    flex
    items-center
    justify-center
    clearfix
    transition
    duration-1000
    sm:(
      hover:(bg-blue-600 text-blue-500)
    )
    md:hover:(text-purple-700 bg-purple-500)
  `,
  card: ow`
    bg-white
    max-w-sm
    rounded-2xl
    overflow-hidden
    shadow-2xl
    border-current
    border-16
    border-solid
    -rotate-3
    sm:rotate-0
    md:rotate-3
  `,
  tag: ow`
    inline-block
    bg-gray-200
    hover:bg-gray-100
    hover:text-gray-800
    hover:shadow-lg
    border
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

// I have to prettier ignore this because for some reason
// adding a space before the html call prevents syntax highlighting
// in my editor https://github.com/mjbvz/vscode-lit-html/issues/82
// prettier-ignore
const app =html`
<main className=${style.main}>
  <div className=${style.card}>
    <img
      className=${ow('w-full')}
      src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
      alt="Sunset in the mountains"
    />
    <div className=${_ow({ 'px-6': true, 'py-8': true, 'space-y-4': true })}>
      <div className=${ow`font-bold`}>
        <h1 className=${ow`text-3xl`}>
          The Coldest Sunset In The World
        </h1>
      </div>
      <div>
        <p className=${ow`text-gray-700 text-base`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatibus quia, nulla! Maiores et perferendis eaque,
          exercitationem praesentium nihil.
        </p>
      </div>
      <form className=${ow`flex flex-row space-x-4`}>
        <input
          className=${ow`w-full py-3 px-4 bg-gray-100 border border-gray-300 rounded sm:focus:bg-gray-100 sm:focus:placeholder-current`}
          placeholder="Enter a value"
        />
        <button className=${ow`px-6 rounded bg-current font-bold`}>
          <span className=${ow`text-white`}>SEND</span>
        </button>
      </form>
    </div>
    <div
      className=${ow`px-6 py-4 bg-gray-100 border-t border-gray-300 border-solid space-x-2`}
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
`;

render(app, document.body);
