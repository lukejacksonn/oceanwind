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
    rounded-xl
    overflow-hidden
    shadow-xl
    border-current
    border-8
    border-solid`,
  tag: ow`
    inline-block
    bg-purple-300
    sm:hover:bg-purple-200
    hover:border-purple-300
    border-1
    border-solid
    border-purple-400
    rounded-full
    px-2
    py-1
    text-sm
    font-semibold
    text-purple-700
    mr-2 cursor-pointer`,
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
        <div
          className=${ow`px-8 py-6 space-y-2 divide-y divide-dashed divide-red-500`}
        >
          <div className=${ow`font-bold text-2xl mb-4`}>The Coldest Sunset</div>
          <p className=${ow`text-gray-700 text-base leading-6 mb-4`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
          <input
            className=${ow`w-full py-4 px-4 bg-gray-500 sm:focus:bg-gray-100 sm:focus:placeholder-red-500`}
            placeholder="Enter a value"
          />
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
  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}button{background-color:transparent;background-image:none}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}fieldset{margin:0;padding:0}ol,ul{list-style:none;margin:0;padding:0}html{font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5}*,::after,::before{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e2e8f0}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#a0aec0}input::-ms-input-placeholder,textarea::-ms-input-placeholder{color:#a0aec0}input::placeholder,textarea::placeholder{color:#a0aec0}[role=button],button{cursor:pointer}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}code,kbd,pre,samp{font-family:Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}
`;

document.head.appendChild(styleSheet);
