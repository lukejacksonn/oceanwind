# Oceanwind

> compiles tailwind like shorthand syntax into css at runtime

This library takes inspiration from [Tailwind](https://github.com/tailwindlabs/tailwindcss) and utilizes [Otion](https://github.com/kripod/otion) to provide means of efficiently generating atomic styles from shorthand syntax and appending them to the DOM at runtime.

Server side rendering and static extraction is also supported.

> ⚡️ Check out the [live and interactive demo](https://esm.codes/#Ly8gT2NlYW53aW5kIGRlbW8gYnkgQGx1a2VqYWNrc29ubgovLyAtLS0tLS0tLS0tLS0tLS0tCiAgICAKaW1wb3J0IHsgcmVuZGVyLCBoIH0gZnJvbSAnaHR0cHM6Ly91bnBrZy5jb20vcHJlYWN0P21vZHVsZSc7CmltcG9ydCBodG0gZnJvbSAnaHR0cHM6Ly91bnBrZy5jb20vaHRtP21vZHVsZSc7CmltcG9ydCBvdyBmcm9tICdodHRwczovL3VucGtnLmNvbS9vY2VhbndpbmQnOwoKY29uc3QgaHRtbCA9IGh0bS5iaW5kKGgpOwoKcmVuZGVyKAogIGh0bWxgCiAgICA8ZGl2IGNsYXNzTmFtZT0ke293YAogICAgICBoLWZ1bGwKICAgICAgYmctcHVycGxlLTUwMAogICAgICBmbGV4CiAgICAgIGl0ZW1zLWNlbnRlcgogICAgICBqdXN0aWZ5LWNlbnRlcgogICAgYH0+CiAgICAgIDxoMSBjbGFzc05hbWU9JHtvd2AKICAgICAgICB0ZXh0LXdoaXRlCiAgICAgICAgZm9udC1ib2xkCiAgICAgICAgZm9udC1zYW5zCiAgICAgICAgaG92ZXI6cm90YXRlLTMKICAgICAgICBob3ZlcjpzY2FsZS0xNTAKICAgICAgICBob3ZlcjpjdXJzb3ItcG9pbnRlcgogICAgICBgfT5IZWxsbyBXb3JsZDwvaDE+CiAgICA8L2Rpdj4KICBgLAogIGRvY3VtZW50LmJvZHkKKTs=)

<img width="100%" src="https://user-images.githubusercontent.com/1457604/91981751-32310b00-ed21-11ea-8a89-f30f1437f9a2.gif">

<br>

The aim here was to create a compiler that:

- 📖 Supports all existing Tailwind shorthand syntax outlined [in the docs](https://tailwindcss.com/docs)
- 💡 Generates only the styles required without building or purging
- 🗜 Is smaller than the average purged css file output from the Tailwind compiler
- ⏱ Has desirable perf characteristics at runtime
- ⚠️ Warns the developer when unrecognized or duplicate shorthand is used

The library currently weighs under 10kb and supports the vast majority of Tailwind directives and variants.

## Usage

To use the library, first import the module then invoke the default export using tagged template syntax:

```js
import ow from 'https://unpkg.com/oceanwind';
document.body.className = ow`h-full bg-purple-500 rotate-3 scale-95`;
```

Running the above code will result in the following happening:

1. Shorthand syntax will be translated into CSS (e.g. `h-full -> { height: 100vh }`).
2. All resultant CSS will be merged into a single CSS-in-JS object
3. Each style will be assigned a unique class and appended to a stylesheet
4. A string is returned representing all the classes that were created

It is recommended to import the following css files which help normalize styles across browsers:

- The Tailwind reset [available here](https://unpkg.com/tailwindcss/dist/base.min.css)
- The Tailwind prose helper [available here](https://unpkg.com/@tailwindcss/typography/dist/typography.min.css)

### Extending the default theme

Importing and invoking oceanwind directly will cause it to use [default theme](https://github.com/lukejacksonn/oceanwind/blob/master/core/theme.js) for directives that require themed values (like `bg-red-500` for example). To customize the theme, use the `themed` export instead of the default export.

```js
import { themed } from 'https://unpkg.com/oceanwind';

const ow = themed({
  colors: {
    red: {
      500: 'hotpink',
    },
  },
});

ow`bg-red-500`; // will result in a hotpink background-color
```

Any custom theme provided to the `themed` function will be deep merged with the default theme.

### Function Signature

It is possible to invoke oceanwind in a multitude of different ways. For example:

```js
// Function call passing a string
ow('bg-red-500 rounded');

// Tag Template Literal (falsey interpolations will be omitted)
ow`bg-red-500 rounded`;
ow`bg-red-500 ${false && 'rounded'}`;

// Function call passing an array (falsey items will be omitted)
ow(['bg-red-500', 'rounded']);
ow(['bg-red-500', false && 'rounded']);

// Function call passing an object (keys with falsey values will be omitted)
ow({ 'bg-red-500': true, rounded: true });
ow({ 'bg-red-500': true, rounded: false });
```

### Variant Grouping

Directives with the same variants can be grouped using parenthesis. Oceanwind will expand the nested directives; applying the variant to each directive in the group before translation. For example:

> Notice any directives within tagged template literals can span multiple lines

```js
ow`
  sm:hover:(
    bg-black
    text-white
  )
  md:(bg-white hover:text-black)
`;
```

It is possible to nest groupings too, for example:

```js
ow`
  sm:(
    bg-black
    text-white
    hover:(bg-white text-black)
  )
`;
```

Two things to note here is that the outermost variant should always be a responsive variant (just like in tailwind `hover:sm:` is not supported) and that nesting responsive variants doesn't make sense either, for example `sm:md:` is not supported.

### Catching Errors

By default warnings about missing or duplicate translations will be written to the console:

![image](https://user-images.githubusercontent.com/1457604/95141411-04e4dc00-0769-11eb-9245-d4cc37c8b58f.png)

Clicking on the file path in dev tools will _jump to_ the line in the file in the sources panel.

It is possible to make oceanwind throw an error rather just warning by opting into _strict_ mode:

```js
themed({ strict: true });
```

![image](https://user-images.githubusercontent.com/1457604/95245344-e9caa880-080a-11eb-9741-576f7b2ff6b0.png)

## Example

Most of the time developers will be using a front end framework to render DOM elements. Oceanwind is framework agnostic but here is an example of how you might use it with preact and no build step.

> ⚡️ Check out the [live and interactive demo](https://esm.codes/#Ly8gT2NlYW53aW5kIGRlbW8gYnkgQGx1a2VqYWNrc29ubgovLyAtLS0tLS0tLS0tLS0tLS0tCiAgICAKaW1wb3J0IHsgcmVuZGVyLCBoIH0gZnJvbSAnaHR0cHM6Ly91bnBrZy5jb20vcHJlYWN0P21vZHVsZSc7CmltcG9ydCBodG0gZnJvbSAnaHR0cHM6Ly91bnBrZy5jb20vaHRtP21vZHVsZSc7CmltcG9ydCBvdyBmcm9tICdodHRwczovL3VucGtnLmNvbS9vY2VhbndpbmQnOwoKY29uc3QgaHRtbCA9IGh0bS5iaW5kKGgpOwoKcmVuZGVyKAogIGh0bWxgCiAgICA8ZGl2IGNsYXNzTmFtZT0ke293YAogICAgICBoLWZ1bGwKICAgICAgYmctcHVycGxlLTUwMAogICAgICBmbGV4CiAgICAgIGl0ZW1zLWNlbnRlcgogICAgICBqdXN0aWZ5LWNlbnRlcgogICAgYH0+CiAgICAgIDxoMSBjbGFzc05hbWU9JHtvd2AKICAgICAgICB0ZXh0LXdoaXRlCiAgICAgICAgZm9udC1ib2xkCiAgICAgICAgZm9udC1zYW5zCiAgICAgICAgaG92ZXI6cm90YXRlLTMKICAgICAgICBob3ZlcjpzY2FsZS0xNTAKICAgICAgICBob3ZlcjpjdXJzb3ItcG9pbnRlcgogICAgICBgfT5IZWxsbyBXb3JsZDwvaDE+CiAgICA8L2Rpdj4KICBgLAogIGRvY3VtZW50LmJvZHkKKTs=)

```js
import { render, h } from 'https://unpkg.com/preact?module';

import htm from 'https://unpkg.com/htm?module';
import ow from 'https://unpkg.com/oceanwind';

const html = htm.bind(h);

render(
  html`
    <div className=${ow`h-full bg-purple-500`}>
      <h1 className=${ow`text-white font-bold`}>Hello World</h1>
    </div>
  `,
  document.body
);
```

## Server-side rendering (SSR)

Oceanwind supports SSR through Otion. Consider the following example:

```js
import { h } from 'preact';
import render from 'preact-render-to-string';
import htm from 'htm';
import { getStyleTag, VirtualInjector } from 'otion/server';
import { setup, themed } from 'oceanwind';

const injector = VirtualInjector();
setup({ injector });

const html = htm.bind(h);
const ow = themed({});
const style = {
  main: ow`clearfix`,
};

const app = html`<main className=${style.main}>hello oceanwind</main>`;
const appHtml = render(app);
const styleTag = getStyleTag(injector);

// Inject styleTag to your HTML now.
```

Oceanwind also exposes `hydrate` from Otion for client-side hydration. [See Otion documentation](https://www.npmjs.com/package/otion#server-side-rendering) for further configuration options and usage instructions.

## Acknowledgements

I'd like to thank both [Adam Wathan](https://github.com/adamwathan) and [Kristóf Poduszló](https://github.com/kripod) for their amazing work with Tailwind and Otion respectively, which made making this library somewhat a breeze. Also [Phil Pluckthun](https://github.com/kitten) who helped me deduce the initial grammar.
