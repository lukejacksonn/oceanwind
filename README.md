# Oceanwind

> compiles tailwind like shorthand syntax into css at runtime

This library takes inspiration from [Tailwind](https://github.com/tailwindlabs/tailwindcss) and utilizes [Otion](https://github.com/kripod/otion) to provide means of efficiently generating atomic styles from shorthand syntax and appending them to the DOM at runtime.

<hr>

<img width="100%" src="https://user-images.githubusercontent.com/1457604/91981751-32310b00-ed21-11ea-8a89-f30f1437f9a2.gif">

> ⚡️ Check out the [live and interactive demo](https://esm.codes/#Ly8gT2NlYW53aW5kIGRlbW8gYnkgQGx1a2VqYWNrc29ubgovLyAtLS0tLS0tLS0tLS0tLS0tCiAgICAKaW1wb3J0IHsgcmVuZGVyLCBoIH0gZnJvbSAnaHR0cHM6Ly91bnBrZy5jb20vcHJlYWN0P21vZHVsZSc7CmltcG9ydCBodG0gZnJvbSAnaHR0cHM6Ly91bnBrZy5jb20vaHRtP21vZHVsZSc7CmltcG9ydCBvdyBmcm9tICdodHRwczovL3VucGtnLmNvbS9vY2VhbndpbmQnOwoKY29uc3QgaHRtbCA9IGh0bS5iaW5kKGgpOwoKcmVuZGVyKAogIGh0bWxgCiAgICA8ZGl2IGNsYXNzTmFtZT0ke293YAogICAgICBoLWZ1bGwKICAgICAgYmctcHVycGxlLTUwMAogICAgICBmbGV4CiAgICAgIGl0ZW1zLWNlbnRlcgogICAgICBqdXN0aWZ5LWNlbnRlcgogICAgYH0+CiAgICAgIDxoMSBjbGFzc05hbWU9JHtvd2AKICAgICAgICB0ZXh0LXdoaXRlCiAgICAgICAgZm9udC1ib2xkCiAgICAgICAgZm9udC1zYW5zCiAgICAgICAgaG92ZXI6cm90YXRlLTMKICAgICAgICBob3ZlcjpzY2FsZS0xNTAKICAgICAgICBob3ZlcjpjdXJzb3ItcG9pbnRlcgogICAgICBgfT5IZWxsbyBXb3JsZDwvaDE+CiAgICA8L2Rpdj4KICBgLAogIGRvY3VtZW50LmJvZHkKKTs=)

<br>

The aim here was to create an interpretter and compiler that:

- Supports all existing Tailwind shorthand syntax outlined [here](https://tailwindcss.com/docs)
- Generates only the styles required for given class names
- Is smaller than the average purged css file output from the Tailwind compiler
- Has desirable perf characteristics at runtime (requires no build step or bundling)
- Warns developers when unrecognized or duplicate shorthands are used

The library currently weighs 7.8KB gzipped (7.2KB compressed using brotli) and supports the vast majority of Tailwind directives and variants.

It also extends the API slightly in some cases; one example of this is an experimental shorthand `cap-<fontSize>-<lineGap>` which aims to replicate the behaviour exhibited by the library [capsize](https://github.com/seek-oss/capsize) on text elements.

Full documentation of any syntax that extends the Tailwind API will come soon. If you find any directives or variants missing or not behaving correctly then please create an issue or pull request!

## Usage

To use the library, first import the module then invoke the default export using tagged template syntax:

```js
import ow from 'https://unpkg.com/oceanwind';
document.body.className = ow`h-full bg-purple-500 rotate-3 scale-95`;
```

The code above will result in the following happening:

1. Shorthand syntax will be translated into CSS (e.g. `h-full => { height: 100vh }`).
2. All resultant CSS will be merged into a single CSS-in-JS object
3. Each style will be assigned a unique class and appended to a stylesheet
4. A string is returned representing all the classes that were created

In addition to importing oceanwind to generate class names for given shorthand. It is reccomended to import two static css files which help normalize styles across browsers. These are:

- The Tailwind reset [available here](https://unpkg.com/tailwindcss@1.7.5/dist/base.min.css)
- The Tailwind prose helper [available here](https://unpkg.com/@tailwindcss/typography@0.2.0/dist/typography.min.css)

### Extending the default theme

Importing and invoking oceanwind directly will cause it to refer to the [default theme](https://github.com/lukejacksonn/oceanwind/blob/master/core/theme.js) for directives that require themed values (like `bg-red-500` for example). If you would like to customize the theme then used the `themed` export instead of the default export.

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

## Example

Most of the time developers will be using a front end framework to render DOM elements. Oceanwind is framework agnostic but here is an example of how you might use it with preact and no build step.

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

> ⚡️ Check out the [live and interactive demo](https://esm.codes/#Ly8gT2NlYW53aW5kIGRlbW8gYnkgQGx1a2VqYWNrc29ubgovLyAtLS0tLS0tLS0tLS0tLS0tCiAgICAKaW1wb3J0IHsgcmVuZGVyLCBoIH0gZnJvbSAnaHR0cHM6Ly91bnBrZy5jb20vcHJlYWN0P21vZHVsZSc7CmltcG9ydCBodG0gZnJvbSAnaHR0cHM6Ly91bnBrZy5jb20vaHRtP21vZHVsZSc7CmltcG9ydCBvdyBmcm9tICdodHRwczovL3VucGtnLmNvbS9vY2VhbndpbmQnOwoKY29uc3QgaHRtbCA9IGh0bS5iaW5kKGgpOwoKcmVuZGVyKAogIGh0bWxgCiAgICA8ZGl2IGNsYXNzTmFtZT0ke293YAogICAgICBoLWZ1bGwKICAgICAgYmctcHVycGxlLTUwMAogICAgICBmbGV4CiAgICAgIGl0ZW1zLWNlbnRlcgogICAgICBqdXN0aWZ5LWNlbnRlcgogICAgYH0+CiAgICAgIDxoMSBjbGFzc05hbWU9JHtvd2AKICAgICAgICB0ZXh0LXdoaXRlCiAgICAgICAgZm9udC1ib2xkCiAgICAgICAgZm9udC1zYW5zCiAgICAgICAgaG92ZXI6cm90YXRlLTMKICAgICAgICBob3ZlcjpzY2FsZS0xNTAKICAgICAgICBob3ZlcjpjdXJzb3ItcG9pbnRlcgogICAgICBgfT5IZWxsbyBXb3JsZDwvaDE+CiAgICA8L2Rpdj4KICBgLAogIGRvY3VtZW50LmJvZHkKKTs=)

## Acknowledgements

I'd like to thank both [Adam Waltham](https://github.com/adamwathan) and [Kristóf Poduszló](https://github.com/kripod) for their amazing work with Tailwind and Otion respectively, which made making this library somewhat a breeze. Also [Phil Pluckthun](https://github.com/kitten) who helped me deduce the initial grammar.
